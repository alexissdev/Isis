import { Request, Response, NextFunction } from "npm:express";

export default (req: Request, res: Response, next: NextFunction) => {
  const { _id, description } = req.body;

  if (!_id) {
    return res.status(400).json({ message: "Missing _id" });
  }

  if (!description) {
    return res.status(400).json({ message: "Missing description" });
  }

  next();
};
