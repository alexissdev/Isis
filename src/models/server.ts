import express, { Application } from "npm:express";
import loadRoutes from "../loader/routes.loader.ts";
import connectMongoose from "../database/database.ts";
import LocalEnvironmentLocal from "../environment/local.environment.ts";

export default class Server {
  private application: Application;

  public constructor() {
    this.application = express();
  }

  public start(): void {
    this.config();

    const serverPort: string = Deno.env.get("PORT") || "3000";

    this.application.listen(serverPort, () => {
      console.log(`Server running in ${serverPort} port.`);
    });
  }

  private config(): void {
    connectMongoose();
    new LocalEnvironmentLocal().load();

    this.application.use(express.json());
    loadRoutes(this.application);
  }
}
