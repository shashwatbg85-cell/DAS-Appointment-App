import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authActions";
import { logout, reset } from "../../redux/slice/authSlice";

const ResetPassword = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { success, error } = useSelector((state) => state.auth);

  const handleResetPassword = () => {
    if (!oldPassword || !newPassword) {
      return toast.error("Please provide both old and new passwords");
    }
    // Dispatch the resetPassword action with the user ID and new password
    dispatch(resetPassword({ id, oldPassword, newPassword }))
      .unwrap()
      .then(() => {
        toast.success("Password reset successful!");
        navigate("/login");
        dispatch(logout());
        dispatch(reset());
      })
      .catch((err) => {
        toast.error(err);
        dispatch(reset());
      });
  };

  useEffect(() => {}, [success, error, navigate, dispatch]);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <h1>Reset Your Password</h1>
      <div className="mb-3">
        <label htmlFor="oldPassword">Enter Your Old Password</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="newPassword">Enter Your New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
