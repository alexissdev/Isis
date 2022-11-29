import { Application } from "npm:express";

import userRoute from "../routes/user.routes.ts";
import licenceRoute from "../routes/licence.routes.ts";

export default (app: Application) => {
    app.use(userRoute);
    app.use(licenceRoute);
}