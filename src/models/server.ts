import express, { Express } from 'npm:express';
import loadRoutes from "./loader/routes.loader.ts";

export default class Server {

    private application: Express;

    public constructor() {
        this.application = express();
    }

    public start(): void {
        this.config();

        const serverPort: number = Deno.env.get("PORT") || 3000;
        this.application.listen(
                serverPort,
                () => { console.log(`Server running in ${serverPort} port.`); }
        );
    }

    private config(): void {
        this.application.use(express.json());
        loadRoutes();
    }

}