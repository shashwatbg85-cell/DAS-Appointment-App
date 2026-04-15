import React, { useEffect } from "react";
import AllDoctorsData from "./DoctorsData.json";
import "./AllDoctors.css";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../redux/actions/doctorActions";

const AllDoctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctor);

  return (
    <>
      <div className="container doc-container">
        <h4 className="text-center text-success mt-3">
          Select a Doctor and book your appointment online now!
        </h4>
        <div className="d-flex flex-wrap">
          {doctors?.map((d) => (
            <div className="card m-4" key={d._id} style={{ width: "15rem" }}>
              <NavLink to={`/doctors/${d._id}`}>
                <img
                  src={d?.image ? `data:image/jpeg;base64,${d.image}` : ""}
                  alt={d?.name || "Doctor image"}
                  width={200}
                  height={200}
                  className="card-image-top"
                />
                <div className="card-body">
                  <h6>{d.name}</h6>
                  <p>{d.degree}</p>
                </div>
                <div className="card-footer">
                  <p>
                    {" "}
                    <i className={d.icon}></i> {d.speciality}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
