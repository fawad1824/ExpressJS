const mongosse = require("mongoose");

const contactScheme = mongosse.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongosse.model("Contact",contactScheme);
