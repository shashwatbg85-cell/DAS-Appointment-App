import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API/API";

//get all appointments
export const getAllAppointments = createAsyncThunk(
  "Appointment/getAllAppointments",
  async (_, thunkApi) => {
    try {
      const res = await API.get("/appointment/get-all");
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || "appointment error";
      return thunkApi.rejectWithValue(message);
    }
  },
);

//get appointment details
export const getAppointmentDetails = createAsyncThunk(
  "appointment/getAppointmentDetails",
  async (id, thunkApi) => {
    try {
      const res = await API.get(`/appointment/get-details/${id}`);
      return res.data;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "appointment details error";
      return thunkApi.rejectWithValue(message);
    }
  },
);
