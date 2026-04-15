import doctorModel from "../models/doctorModel.js";

//add doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      image,
      speciality,
      experience,
      dob,
    } = req.body;
    if (
      !name ||
      !email ||
      !degree ||
      !fees ||
      !gender ||
      !phone ||
      !speciality ||
      !experience
    ) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const photoBase64 = req.file && req.file.buffer.toString("base64");
    const doctorData = {
      name,
      email,
      degree,
      fees,
      about,
      gender,
      phone,
      address,
      image: photoBase64,
      speciality,
      experience,
      dob,
    };
    const doctor = new doctorModel(doctorData);
    await doctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor Created",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In add Doctor API",
      error,
    });
  }
};

//get all doctor
export const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "All Doctor List",
      totalCount: doctors.length,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get all Doctor API",
      error,
    });
  }
};

//get doctor details
export const getDoctorDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please add doctor id",
      });
    }
    //find doctor
    const doctor = await doctorModel.findById(id);
    if (!doctor) {
      return res.status(404).send({
        success: false,
        message: "no doctor found with this id",
      });
    }
    res.status(200).send({
      success: true,
      message: " Doctor Fatched Successfully",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get Doctor details API",
      error,
    });
  }
};

//update doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please add doctor id",
      });
    }
    const data = req.body;
    const photoBase64 = req.file && req.file.buffer.toString("base64");
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false },
    );

    res.status(200).send({
      success: true,
      message: "Doctor Details Updated",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In update Doctor API",
      error,
    });
  }
};

//delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please add doctor id",
      });
    }
    await doctorModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Doctor Has Been Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Delete Doctor API",
      error,
    });
  }
};

//update available status
export const updateAvailableStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please add doctor id",
      });
    }
    const { availableStatus } = req.body;
    if (!availableStatus) {
      return res.status(404).send({
        success: false,
        message: "Please provide available status",
      });
    }
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: { available: availableStatus } },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Doctor Available Status Has Been Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In update available status API",
      error,
    });
  }
};
