import { Express} from "npm:express";

import userRoute from "../routes/user.routes.ts";

export default (app: Express) => {
    app.use(userRoute);
}