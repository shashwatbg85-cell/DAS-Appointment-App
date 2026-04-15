import appointmentModel from "../models/appointmentsModel.js";
import doctorModel from "../models/doctorModel.js";
import userModel from "../models/userModel.js";

//create
export const bookAppointment = async (req, res) => {
  try {
    const { userId, doctorId, amount, slotDate, slotTime } = req.body;
    if (!userId || !doctorId || !amount || !slotDate || !slotTime) {
      return res.status(400).send({
        success: false,
        message: "Please Provide all Fields",
      });
    }
    const appointment = new appointmentModel({
      userId,
      doctorId,
      slotDate,
      slotTime,
      amount,
    });

    await appointment.save();
    res.status(201).send({
      success: true,
      message: "Appointment Book Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In create appointment API",
      error,
    });
  }
};

//get all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.status(200).send({
      success: true,
      message: "All Appointments",
      totalCount: appointments.length,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get all appointment API",
      error,
    });
  }
};

//get details
export const getAllAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "no appointment found with this ID",
      });
    }

    // Auth check: IsAdmin or it's the user's own appointment
    const userRequesting = await userModel.findById(req.user.id);
    if (
      !userRequesting.isAdmin &&
      appointment.userId.toString() !== req.user.id
    ) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    }
    //find user & doctor
    const user = await userModel.findOne({ _id: appointment?.userId });
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });
    res.status(200).send({
      success: true,
      message: "Appointment Details Fatched Successfully",
      appointmentDetails: {
        clientName: user?.name,
        clientPhone: user?.phone || "NA",
        clientEmail: user?.email,
        doctorName: doctor?.name || "NA",
        doctorPhone: doctor?.phone || "NA",
        doctorEmail: doctor?.email || "NA",
        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In get all  appointment details API",
      error,
    });
  }
};

// change status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const { appointmentStatus } = req.body;
    if (!appointmentStatus) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Status",
      });
    }
    const appointment = await appointmentModel.findByIdAndUpdate(
      id,
      { $set: { status: appointmentStatus } },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Appointment Status Has Been Updated",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In update status appointment details API",
      error,
    });
  }
};

//user appointments
export const getUserAppointments = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found ",
      });
    }

    const appointment = await appointmentModel.find({ userId: user?._id });
    res.status(200).send({
      success: true,
      message: "Your Appointment ",
      totalCount: appointment.length,
      appointment,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In get user appointment  API",
      error,
    });
  }
};

//get user appointments details
export const getUserAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "no user found with this ID",
      });
    }
    //get user appointment details
    const appointment = await appointmentModel.findOne({ userId: user?._id });
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });

    res.status(200).send({
      success: true,
      message: "Appointment Details Fatched Successfully",
      appointmentDetails: {
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,
        bookingDate: appointment?.slotDate,
        bookingTime: appointment?.slotTime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In get all  appointment details API",
      error,
    });
  }
};

//update user booking status
export const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Appointment Id",
      });
    }
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: "No Appointment found with this Id",
      });
    }
    await appointment.updateOne({ $set: { status: "cancel" } });
    res.status(200).send({
      success: true,
      message: " Appointment Canceled Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error In cancel  appointment details API",
      error,
    });
  }
};
