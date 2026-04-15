import mongoose from "mongoose";

const webMessaageSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"] },
    contact: {
      type: String,
      require: [true, "contact no. or email is required"],
    },
    message: { type: String, require: [true, "message is required"] },
  },
  { timestamps: true }
);

const webmessageModel = mongoose.model("webmessage", webMessaageSchema);

export default webmessageModel;
