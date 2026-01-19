import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true,
      unique: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    rateLimit: {
      type: Number,
      default: 1000
    }
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
