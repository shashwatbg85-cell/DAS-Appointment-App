import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import EditUserProfile from "./EditUserProfile";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../redux/slice/authSlice";
import { getLoginUserDetails } from "../../redux/actions/authActions";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(reset());
    const localData = localStorage.getItem("appData");
    const appData = JSON.parse(localData);
    if (appData) {
      const id = appData?.user?._id;
      dispatch(getLoginUserDetails(id));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("appData");
    navigate("/login");
    toast.success("logout successfully");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointments</h4>
          <div className="col-md-3">
            {user?.image ? (
              <img
                src={`data:image/jpeg;base64,${user.image}`}
                alt={user?.name || "User picture"}
                className="card p-2"
                width={200}
                height={200}
              />
            ) : (
              <div
                className="card p-2"
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
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name: {user?.name}</h6>
              <h6>Gender: {user?.gender || "NA"}</h6>
              <h6>DOB: {user?.DOB || "NA"}</h6>
              <h6>Email: {user?.email}</h6>
              <h6>Phone: {user?.phone || "NA"}</h6>
              <h6>Address: {user?.address || "NA"}</h6>
              <h4>
                <Link to={`/user/reset-password/${user?._id}`}>
                  Reset Password
                </Link>
              </h4>
            </div>
            {/*buttons*/}
            <div className="button-container mt-5">
              <button
                className="btn btn-warning"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="fa-solid fa-pen-to-square"></i>Edit Profile
              </button>
              <button
                className="btn ms-3"
                style={{ backgroundColor: "#8A2BE2", color: "white" }}
                onClick={() => navigate("/user/appointments")}
              >
                <i className="fa-solid fa-list"></i>
                Appointment
              </button>
              <button className="btn btn-danger ms-3" onClick={handleLogout}>
                <i className="fa-solid fa-power-off"></i>
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*edit profile*/}
      {isOpen && (
        <EditUserProfile isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
