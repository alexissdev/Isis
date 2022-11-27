import { Request, Response } from "npm:express";
import User from "../models/user.model.ts";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(userUpdate);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleteUser = await User.findByIdAndDelete(req.body);
  res.json(deleteUser);
};
