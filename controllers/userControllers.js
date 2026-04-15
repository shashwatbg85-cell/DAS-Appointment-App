import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentsModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//register
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };
    //save user
    const newUser = new userModel(userData);
    const user = await newUser.save();

    res.status(201).send({
      success: true,
      message: "Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//LOGIN
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please add your email and password",
      });
    }
    //find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    //match password
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(402).send({
        success: false,
        message: "invalid password",
      });
    }

    //token
    const token = JWT.sign({ id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "login successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      error,
    });
  }
};

//update user details
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "User Id Not Found",
      });
    }
    const { name, phone, dob, image, gender, address } = req.body;
    const photoToBase64 = req.file && req.file.buffer.toString("base64");
    const user = await userModel.findByIdAndUpdate(
      id,
      {
        $set: { name, dob, address, phone, gender, image: photoToBase64 },
      },
      { returnOriginal: false },
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong in update user api",
      error,
    });
  }
};

// password reset
export const updatePassword = async (req, res) => {
  try {
    //user id
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "user id not found",
      });
    }
    //req.body
    let { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).send({
        success: false,
        message: "Please provide Old and New Password",
      });
    }
    oldPassword = oldPassword.trim();
    newPassword = newPassword.trim();
    //find user
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    //check oldpassword
    const isMatch = await bcrypt.compare(oldPassword, user?.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "incorrect old password",
      });
    }
    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    //update
    user.password = hashedPassword;
    await user.save();

    res.status(200).send({
      success: true,
      message: "Password Update Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Update Password API",
      error,
    });
  }
};

//get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "All Users",
      totalCount: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get all users API",
      error,
    });
  }
};

// get user details & appointment details
export const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please provide user id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "no user found with this id",
      });
    }
    //find appointment
    const appointments = await appointmentModel.find({ userId: user?._id });
    res.status(200).send({
      success: true,
      message: "Details Fatched Successfully",
      user,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get users details API",
      error,
    });
  }
};

//get stats
export const getStats = async (req, res) => {
  try {
    const users = await userModel.find({});
    const doctors = await doctorModel.find({});
    const appointments = await appointmentModel.aggregate([
      {
        $group: { _id: null, toatlEarning: { $sum: { $toDouble: "$amount" } } },
      },
    ]);
    const total = appointments.length > 0 ? appointments[0].toatlEarning : 0;
    res.status(200).send({
      success: true,
      message: "All Stats",
      stats: {
        totalUsers: users.length,
        totalDoctors: doctors.length,
        totalEarning: total,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get all stats API",
      error,
    });
  }
};

//get login user
export const getLoginUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide User ID",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: " User ID not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login User Details",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In get all users API",
      error,
    });
  }
};
