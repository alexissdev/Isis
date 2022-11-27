import { Request, Response, NextFunction } from "npm:express";

export default (req: Request, res: Response, next: NextFunction) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!description) {
    return res.status(400).json({ message: "Description is required" });
  }

  next();
};
