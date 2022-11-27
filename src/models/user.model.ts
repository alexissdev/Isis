import { Schema, model } from "npm:mongoose";

export default model(
  "User",
  new Schema(
    {
      name: String,
      description: String,
    },
    {
      timestamps: true,
    }
  )
);
