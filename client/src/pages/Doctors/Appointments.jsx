import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DoctorData from "./DoctorsData.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import "./AllDoctors.css";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetails } from "../../../../../admin-panel/src/redux/actions/doctorActions";
import { bookAppointment } from "../../redux/actions/authActions";
import toast from "react-hot-toast";
import { reset } from "../../redux/slice/authSlice";

const Appointments = () => {
  const { id } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch, id]);

  const { doctor } = useSelector((state) => state.doctor);

  useEffect(() => {
    if (doctor) {
      setDocInfo(doctor);
    }
  }, [doctor]);

  //get  date and time from datepicker
  const extractDate = (dateObject) => {
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const extractTime = (dateObject) => {
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const { success, error, user } = useSelector((state) => state.auth);
  const handleBooking = () => {
    const bookingData = {
      doctorId: docInfo?._id,
      userId: user?._id,
      amount: docInfo?.fees,
      slotDate: extractDate(selectedDateTime),
      slotTime: extractTime(selectedDateTime),
    };
    dispatch(bookAppointment(bookingData));
    if (success) {
      toast.success("Appointment booked successfully!");
      navigate("/user/appointments");
      dispatch(reset());
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  };
  return (
    <>
      <div className="container docinfo-container">
        <div className="row m-3">
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            {docInfo?.image ? (
              <img
                src={`data:image/jpeg;base64,${docInfo.image}`}
                alt={docInfo?.name || "Doctor image"}
                height={200}
                width={200}
              />
            ) : (
              <div
                className="placeholder-image"
                style={{
                  width: 200,
                  height: 200,
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No image available
              </div>
            )}
            <h5>{docInfo?.name}</h5>
            <h5
              className={`${docInfo?.available ? "text-success" : "text-danger"}`}
            >
              {docInfo?.available ? "Available" : "Not Available"}
            </h5>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center m=3">
            <h5>Experinece:{docInfo?.experience} Year's</h5>
            <h5>About Doctor:</h5>
            <p>{docInfo?.about}</p>
            <h4>Consultation Fee:{docInfo?.fees}</h4>
            {/*date time*/}
            <div className="date-time mt-3">
              <h6 className="">Select Your Booking Date & Time:👇</h6>
              <DatePicker
                ClassName="calender"
                minDate={new Date()}
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                dateFormat={"d-MMM-yyyy h:mm aa"}
                timeCaption="Time"
                minTime={new Date()}
                maxTime={setHours(setMinutes(new Date(), 2), 22)}
              />
              <p>
                Your Selected Booking:
                {selectedDateTime
                  ? selectedDateTime.toLocaleString()
                  : "Please Select a date & time"}
              </p>
            </div>
            <button
              className="btn btn-primary w-50"
              disabled={!docInfo?.available}
              onClick={handleBooking}
            >
              {docInfo?.available ? "Book Now" : "Doctor Not Available"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
