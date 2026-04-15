import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelStatus, getAllAppointments } from "../../redux/actions/authActions";
import { reset } from "../../redux/slice/authSlice";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const MyAppointment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("appData");
    const appData = JSON.parse(localData);
    if (appData) {
      const id = appData?.user?._id;
      dispatch(getAllAppointments(id));
      dispatch(reset());
    }
  }, [dispatch]);

  const { success, error, appointments, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch(cancelStatus(id)).then(() => {
        toast.success("Appointment Canceled Successfully");
        if (user?._id) {
          dispatch(getAllAppointments(user._id));
        }
      });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-4 align-items-center">
        <div className="col">
          <h2 className="fw-bold text-primary mb-0">My Appointments</h2>
          <p className="text-muted">Manage and track your scheduled consultations</p>
        </div>
        <div className="col-auto">
          <span className="badge bg-primary rounded-pill px-3 py-2">
            Total: {appointments?.length || 0}
          </span>
        </div>
      </div>

      {!appointments || appointments.length === 0 ? (
        <div className="text-center p-5 bg-white rounded-3 shadow-sm">
          <div className="mb-4">
            <i className="bi bi-calendar-x text-muted" style={{ fontSize: "4rem" }}></i>
          </div>
          <h3>No Appointments Found</h3>
          <p className="text-muted">You haven't booked any appointments yet.</p>
          <Link to="/doctors" className="btn btn-primary px-4 rounded-pill">
            Book an Appointment
          </Link>
        </div>
      ) : (
        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4 py-3">#</th>
                  <th className="py-3">Date & Time</th>
                  <th className="py-3">Amount</th>
                  <th className="py-3 text-center">Status</th>
                  <th className="py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, i) => (
                  <tr key={a._id || i}>
                    <td className="ps-4 fw-medium text-muted">{i + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="p-2 bg-primary-subtle rounded-2 me-3 text-primary">
                          <i className="bi bi-calendar-event"></i>
                        </div>
                        <div>
                          <div className="fw-bold">{a.slotDate}</div>
                          <div className="small text-muted">{a.slotTime}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="fw-bold text-dark">₹{a.amount}</span>
                    </td>
                    <td className="text-center">
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          a.status === "pending"
                            ? "bg-warning-subtle text-warning-emphasis"
                            : a.status === "completed"
                            ? "bg-success-subtle text-success-emphasis"
                            : "bg-danger-subtle text-danger-emphasis"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="text-center pe-4">
                      <div className="d-flex justify-content-center gap-2">
                        <Link
                          to={`/user/appointment/${a?._id}`}
                          className="btn btn-sm btn-outline-primary rounded-pill px-3"
                        >
                          <i className="bi bi-eye me-1"></i> Details
                        </Link>
                        {a.status === "pending" && (
                          <button
                            className="btn btn-sm btn-outline-danger rounded-pill px-3"
                            onClick={() => handleCancel(a?._id)}
                          >
                            <i className="bi bi-x-circle me-1"></i> Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <style>{`
        .bg-primary-subtle { background-color: #e7f1ff; }
        .text-primary { color: #0d6efd !important; }
        .bg-warning-subtle { background-color: #fff3cd; }
        .text-warning-emphasis { color: #664d03; }
        .bg-success-subtle { background-color: #d1e7dd; }
        .text-success-emphasis { color: #0a3622; }
        .bg-danger-subtle { background-color: #f8d7da; }
        .text-danger-emphasis { color: #58151c; }
        .table-hover tbody tr:hover { background-color: #f8f9fa; }
      `}</style>
    </div>
  );
};

export default MyAppointment;
