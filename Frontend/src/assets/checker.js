import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { useNavigate } from "react-router-dom";
dotenv.config();

const jwtsec = process.env.JWT_SECRET;

export const checker = async () => {
  const navigate = useNavigate();
  const token = await localStorage.getItem("token");
  if (!token) {
    navigate("/signup");
  }
  const verify = await jwt.verify(token, jwtsec);
  if (verify) {
    return;
  } else {
    navigate("/signup");
  }
};
