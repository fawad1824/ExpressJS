const aysncHandler = require("express-async-handler");
const Contact = require("../models/contactModel.js");

const getContact = aysncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
const getSingleContact = aysncHandler(async (req, res) => {
  res.status(200).json({ message: `Get single contacts ${req.params.id}` });
});
const AddContact = aysncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are mandatory");
  }
  const contact=await Contact.create({
    name,
    email,
    phone
  })
  res.status(200).json(contact);
});
const UpdateContact = aysncHandler(async (req, res) => {
  res.status(200).json({ message: "Updated contacts" });
});
const DeleteContact = aysncHandler(async (req, res) => {
  res.status(200).json({ message: "Deleted contacts" });
});

module.exports = {
  getContact,
  getSingleContact,
  AddContact,
  UpdateContact,
  DeleteContact,
};
