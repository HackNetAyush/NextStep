import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBURL = process.env.DB_URL || "";

const dbconnect = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("connected");
  } catch (e) {
    console.error(`error message ${e}`);
  }
};

export default dbconnect;
