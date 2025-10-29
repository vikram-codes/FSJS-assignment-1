const mongoose = require("mongoose");

// Define schema for User
/**
 * User model schema definition (JSDoc)
 *
 * Represents a person's core profile and contact information stored in the database.
 * Use this typedef to describe the shape of user documents handled by the application.
 *
 * @typedef {Object} User
 * @property {string} firstName - Given name of the user. Required.
 * @property {string} lastName - Family name / surname of the user. Required.
 * @property {Date} dob - Date of birth. Stored as a JavaScript Date. Required.
 * @property {string} address1 - Primary street address or mailing address. Required.
 * @property {string} [address2] - Secondary address line (apartment, unit, suite). Optional.
 * @property {string} city - City of residence. Required.
 * @property {string} postalCode - Postal or ZIP code. Required.
 * @property {string} country - Country name or ISO code. Required.
 * @property {string} phoneNumber - Contact phone number; stored as string to preserve formatting. Required.
 * @property {string} email - Contact email address. Required.
 * @property {string} [notes] - Optional free-form notes or additional information about the user.
 * @property {Date} createdAt - Automatically managed timestamp for when the document was created.
 * @property {Date} updatedAt - Automatically managed timestamp for the last document update.
 *
 * Note: createdAt and updatedAt are added by Mongoose when { timestamps: true } is used.
 * Security note: Treat email, phoneNumber and dob as sensitive data — validate and sanitize inputs
 * and ensure appropriate access controls and storage protections (encryption / hashing as required).
 */
const UserSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    dob: { type: Date, required: true }, // Date of Birth
    address1: { type: String, required: true },
    address2: { type: String }, // optional
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    notes: { type: String }, // optional
  },
  { timestamps: true }
); // adds createdAt & updatedAt automatically

module.exports = mongoose.model("User", UserSchema);
