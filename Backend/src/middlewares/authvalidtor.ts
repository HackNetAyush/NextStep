import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const jwtsecret: string = process.env.JWT_SECRET || "notwod";
console.log(jwtsecret);

const authchecker = async (req: Request, res: Response) => {
  const token = req.headers.authorization || " ";
  const verify = await jwt.verify(token, jwtsecret);
  if (!verify) {
    return true;
  } else {
    return false;
  }
};

export const checkroute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sucess = await authchecker(req, res);
  if (sucess) {
    next();
  } else {
    return res.status(403).json({
      msg: "user not authenticated",
    });
  }
};

export const checkfrontend = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = await req.headers.authorization;
  if (!authHeader) {
    return res.status(403).json({ msg: "Token not found" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verify = await jwt.verify(token, jwtsecret);
    if (verify) {
      res.json({
        msg: "valid token",
      });
    } else {
      res.status(403).json({
        msg: "Invalid token",
      });
    }
  } catch (e) {
    return res.status(401).json({ msg: "error", error: e });
  }
};
