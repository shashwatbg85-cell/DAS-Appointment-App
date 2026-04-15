import webmessageModel from "../models/webMessage.js";

//create message
export const createMessage = async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    if (!name || !contact || !message) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const webMessage = new webmessageModel({ name, contact, message });
    await webMessage.save();
    res.status(201).send({
      success: true,
      message: "Your Message Sent Successfully",
      webMessage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Web Message API",
      error,
    });
  }
};

//get all message
export const getAllMessages = async (req, res) => {
  try {
    const webMessages = await webmessageModel.find({});
    res.status(201).send({
      success: true,
      message: "All web messages",
      totalCount: webMessages.length,
      webMessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In  get all Web Message API",
      error,
    });
  }
};

//delete message ke liye
export const deleteWebMessage = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Please Provide message id ",
      });
    }
    //find message
    const webMessage = await webmessageModel.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      message: "messages has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In delete Web Message API",
      error,
    });
  }
};
