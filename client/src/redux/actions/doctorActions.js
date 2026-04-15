import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API/API";

//get all doctors
export const getAllDoctors = createAsyncThunk(
  "Doctor/getAllDoctors",
  async (_, thunkApi) => {
    try {
      const res = await API.get("/doctor/get-all");
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "get all doc error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//get doctor details
export const getDoctorDetails = createAsyncThunk(
  "doctor/getDoctorDetails",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/doctor/get-details/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "doctor details error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
