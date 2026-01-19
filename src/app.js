import express from "express";
import cors from "cors";
import clientRoutes from "./routes/client.routes.js";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "Auth-as-a-Service"
  });
});

app.use("/api/v1", clientRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", protectedRoutes);

export default app;
