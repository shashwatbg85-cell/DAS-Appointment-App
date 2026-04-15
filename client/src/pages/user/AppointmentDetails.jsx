import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAppointmentDetails } from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";

const AppointmentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getAppointmentDetails(id));
      dispatch(reset());
    }
  }, [dispatch, id]);

  const { appointmentDetails, loading, error } = useSelector(
    (state) => state.auth
  );

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
            <div className="card-header bg-primary text-white p-4">
              <h3 className="mb-0 text-center">Appointment Details</h3>
            </div>
            <div className="card-body p-4 bg-light">
              <div className="row g-4">
                {/* Doctor Section */}
                <div className="col-md-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="text-primary border-bottom pb-2 mb-3">
                      Doctor Information
                    </h5>
                    <p className="mb-2">
                      <strong>Name:</strong> {appointmentDetails?.doctorName}
                    </p>
                    <p className="mb-2">
                      <strong>Phone:</strong> {appointmentDetails?.doctorPhone}
                    </p>
                    <p className="mb-0">
                      <strong>Email:</strong> {appointmentDetails?.doctorEmail}
                    </p>
                  </div>
                </div>

                {/* Client Section */}
                <div className="col-md-6">
                  <div className="p-3 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="text-primary border-bottom pb-2 mb-3">
                      Patient Information
                    </h5>
                    <p className="mb-2">
                      <strong>Name:</strong> {appointmentDetails?.clientName}
                    </p>
                    <p className="mb-2">
                      <strong>Phone:</strong> {appointmentDetails?.clientPhone}
                    </p>
                    <p className="mb-0">
                      <strong>Email:</strong> {appointmentDetails?.clientEmail}
                    </p>
                  </div>
                </div>

                {/* Booking Section */}
                <div className="col-12">
                  <div className="p-3 bg-white rounded-3 shadow-sm">
                    <h5 className="text-primary border-bottom pb-2 mb-3">
                      Booking Details
                    </h5>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="mb-2">
                          <strong>Date:</strong> {appointmentDetails?.bookingDate}
                        </p>
                        <p className="mb-2">
                          <strong>Time:</strong> {appointmentDetails?.bookingTime}
                        </p>
                        <p className="mb-2">
                          <strong>Amount:</strong> ₹{appointmentDetails?.amount}
                        </p>
                      </div>
                      <div className="col-md-6 text-md-end">
                        <p className="mb-2">
                          <strong>Status:</strong>{" "}
                          <span
                            className={`badge ${
                              appointmentDetails?.bookingStatus === "pending"
                                ? "bg-warning text-dark"
                                : appointmentDetails?.bookingStatus === "completed"
                                ? "bg-success"
                                : "bg-danger"
                            } px-3 py-2`}
                          >
                            {appointmentDetails?.bookingStatus}
                          </span>
                        </p>
                        <p className="mb-2">
                          <strong>Payment:</strong>{" "}
                          <span
                            className={`badge ${
                              appointmentDetails?.paymentMode
                                ? "bg-success"
                                : "bg-secondary"
                            } px-3 py-2`}
                          >
                            {appointmentDetails?.paymentMode ? "Paid" : "Unpaid"}
                          </span>
                        </p>
                        <p className="mb-0 text-muted small">
                          Created At:{" "}
                          {new Date(
                            appointmentDetails?.createdAt
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white text-center p-3">
              <button
                className="btn btn-outline-secondary px-4 rounded-pill shadow-sm"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left me-2"></i> Back to Appointments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
