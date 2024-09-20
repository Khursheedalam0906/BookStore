import mongoose from "mongoose";

const DbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connected to database", error);
  }
};

export default DbConfig;
