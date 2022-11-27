import { Express} from "npm:express";

import userRoute from "../routes/user.routes.ts";
import licenceRoute from "../routes/licence.routes.ts";

export default (app: Express) => {
    app.use(userRoute);
    app.use(licenceRoute);
}