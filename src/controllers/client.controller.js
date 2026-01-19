import crypto from "crypto";
import Client from "../models/Client.js";

export const createClient = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Client name required" });
    }

    const apiKey = crypto.randomBytes(24).toString("hex");

    const client = await Client.create({
      name,
      apiKey
    });

    res.status(201).json({
      name: client.name,
      apiKey: client.apiKey
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create client" });
  }
};
