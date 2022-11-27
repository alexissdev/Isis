import { Request, Response } from "npm:express";
import Licence from "../models/licence.model.ts";

export const getLicences = async (_req: Request, res: Response) => {
  const licences = await Licence.find();
  res.json(licences);
};

export const getLicence = async (req: Request, res: Response) => {
  const licence = await Licence.findById(req.params.id);
  res.json(licence);
};

export const createLicence = async (req: Request, res: Response) => {
  const newLicence = await Licence.create(req.body);
  res.json(newLicence);
};

export const updateLicence = async (req: Request, res: Response) => {
  const licenceUpdate = await Licence.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  );

  res.json(licenceUpdate);
};

export const deleteLicence = async (req: Request, res: Response) => {
  const deleteLicence = await Licence.findByIdAndDelete(req.body);
  res.json(deleteLicence);
};
