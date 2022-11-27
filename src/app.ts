import express, { Express } from 'npm:express';

import "./environment/local.environment.ts";
import "./database/database.ts";
import loadRoutes from "./loader/routes.loader.ts";

const app: Express = express();

app.use(express.json());
loadRoutes(app);

app.listen(Deno.env.get("PORT") || 3000, () => {
    console.log('Listening on port 3000');
});