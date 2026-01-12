import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  countryCode: { type: String, default: "+91" },
  phone: { type: String, required: true },
  company: { type: String },
  profession: { type: String }, // Values: Developer, Broker, Architect, Buyer 
  requirement: { type: String },
  status: { type: String, default: "New" }, // For Admin Dashboard tracking
  createdAt: { type: Date, default: Date.now },
});

export const Contact = models.Contact || model("Contact", ContactSchema);