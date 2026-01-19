import Client from "../models/Client.js";

const apiKeyAuth = async (req, res, next) => {
  try {
    const apiKey = req.header("x-api-key");

    if (!apiKey) {
      return res.status(401).json({
        message: "API key missing"
      });
    }

    const client = await Client.findOne({ apiKey });

    if (!client || !client.isActive) {
      return res.status(403).json({
        message: "Invalid or inactive API key"
      });
    }

    req.client = client;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "API key authentication failed"
    });
  }
};

export default apiKeyAuth;
