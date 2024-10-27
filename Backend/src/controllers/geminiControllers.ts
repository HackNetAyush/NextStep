import { UserModel } from "../schema/userModel";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const geminiHelper = async (req: Request, res: Response) => {
  const body = req.body;
  const token = body.token;
  const decode = await jwt.decode(token);
  if (!decode) {
    return res.json({
      msg: "data not found",
    });
  }
  //@ts-ignore
  const email = (await decode.email) || " ";
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.json({
      msg: "user not found",
    });
  }
  return res.json({
    gender: user.gender || " ",
    age: user.age || " ",
    location: user.location || " ",
    interest: user.interest || " ",
    bio: user.bio || " ",
    proudmoment: user.proudmoment || " ",
    description: user.description || " ",
    track: user.track || " ",
  });
};
