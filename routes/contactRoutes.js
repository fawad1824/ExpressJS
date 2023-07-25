const express=require("express")
const router=express.Router()
const {getContact,getSingleContact,AddContact,UpdateContact,DeleteContact}= require("../controllers/contactController");


// Get
router.route("/").get(getContact).post(AddContact);

// Get by ID
router.route("/:id").get(getSingleContact).put(UpdateContact).delete(DeleteContact);

module.exports = router;

// 34:15