import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import welcomeRoutes from "./routes/welcomeroutes";
import dbconnect from "./utils/dbconnect";
import dotenv from "dotenv";
// import cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.set("trust proxy", 1);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", welcomeRoutes);

dbconnect();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
