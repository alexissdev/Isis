import { Schema, model } from "npm:mongoose";

export default model(
  "Licence",
  new Schema(
    {
      _id: String,
      address: String,
    },
    {
      timestamps: true,
    }
  )
);
