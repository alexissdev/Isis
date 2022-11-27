import { Router } from "npm:express";
import {
  createLicence,
  deleteLicence,
  getLicence,
  getLicences,
  updateLicence,
} from "../controllers/licence.controller.ts";

const router = Router();

router.get("/api/licence", getLicences);
router.get("/api/licence/:id", getLicence);
router.delete("/api/licence/:id", deleteLicence);
router.put("/api/licence/:id", updateLicence);
router.post("/api/licence", createLicence);

export default router;
