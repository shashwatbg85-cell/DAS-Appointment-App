import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongodb Database Connected".bgMagenta.white);
  });
  const uri = process.env.MONGO_URI || `${process.env.MONGO_LOCAL_URI}/doctorapp`;
  await mongoose.connect(uri);
};

export default connectDB;
