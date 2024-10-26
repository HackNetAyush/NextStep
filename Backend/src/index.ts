import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import dbconnect from "./utils/dbconnect";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoutes);

dbconnect();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
