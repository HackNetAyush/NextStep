import { Request, Response } from "express";
import { welcomeinput } from "../types/welcometypes";
import { UserModel } from "../schema/userModel";

export const updatedes = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const user = await UserModel.updateOne(
      { email: body.email },
      {
        description: body.description,
      }
    );
    return res.json({
      msg: "updated",
    });
  } catch (e) {
    return res.json({
      msg: "error",
      error: e,
    });
  }
};

export const welcome = async (req: Request, res: Response) => {
  const body = req.body;
  const validate = await welcomeinput.safeParse(body);
  try {
    if (!validate.success) {
      return res.json({
        msg: "Invalid Inputs",
      });
    }
    const user = await UserModel.updateOne(
      { email: body.email },
      {
        gender: body.gender,
        age: body.age,
        location: body.location,
        bio: body.bio,
        proudmoment: body.proudmoment,
      }
    );
    return res.json({
      msg: "user updated",
    });
  } catch (e) {
    return res.json({
      msg: "error",
      error: e,
    });
  }
};
