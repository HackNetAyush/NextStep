import { Request, Response } from "express";
import { signinInput, signupInput } from "../types/usertypes";
import { UserModel } from "../schema/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtsecret: string = process.env.JWT_SECRET || " ";
console.log(jwtsecret);

export const login = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await signinInput.safeParse(body);
  try {
    if (!validate.success) {
      res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const user = await UserModel.findOne({ email: body.email }).exec();
      if (!user) {
        return res.json({
          msg: "no user found",
        });
      }
      if (body.password == user.password) {
        const token = jwt.sign(
          { email: user.email, id: user.id, status: user.status },
          jwtsecret
        );
        res.json({
          msg: "user signed in",
          jwt: token,
          user: user.name,
        });
      } else {
        return res.json({
          msg: "Invalid password",
        });
      }
    }
  } catch (e) {
    res.json({
      msg: "error",
      error: e,
    });
  }
};

export const signup = async (req: Request, res: Response) => {
  const body = await req.body;
  const validate = await signupInput.safeParse(body);
  try {
    if (!validate.success) {
      return res.json({
        msg: "Invalid Inputs",
      });
    } else {
      const userexsists = await UserModel.findOne({ email: body.email });
      if (userexsists) {
        return res.json({
          msg: "user already exsists",
        });
      }
      const data = await UserModel.create({
        name: body.name,
        email: body.email,
        password: body.password,
        status: "false",
      });
      const token = await jwt.sign(
        { email: data.email, id: data.id, status: data.status },
        "jwtsecret"
      );
      return res.json({
        msg: "user created",
        jwt: token,
        user: body.name,
      });
    }
  } catch (e) {
    res.json({
      msg: "error",
      error: e,
    });
  }
};
