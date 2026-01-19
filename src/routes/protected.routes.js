import express from "express";
import apiKeyAuth from "../middleware/apiKeyAuth.js";
import jwtAuth from "../middleware/jwtAuth.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

// Any logged-in user
router.get(
  "/profile",
  apiKeyAuth,
  jwtAuth,
  (req, res) => {
    res.status(200).json({
      message: "User profile accessed",
      user: req.user,
      client: req.client.name
    });
  }
);

// Admin-only
router.get(
  "/admin/dashboard",
  apiKeyAuth,
  jwtAuth,
  authorize("admin"),
  (req, res) => {
    res.status(200).json({
      message: "Admin dashboard accessed"
    });
  }
);

export default router;
