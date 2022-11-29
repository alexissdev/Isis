import mongoose from "npm:mongoose";

export default async () => {
  const mongoUri =
    Deno.env.get("MONGO_URI") || "mongodb://localhost/deno_rest_api";

  try {
    const database = await mongoose.connect(mongoUri);
    console.log(`Database is connected to ${database.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
