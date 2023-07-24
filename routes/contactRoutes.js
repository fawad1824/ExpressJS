const express=require("express")
const router=express.Router()
const {getContact,getSingleContact,AddContact,UpdateContact,DeleteContact}= require("../controllers/contactController");


// Get
router.route("/").get(getContact);

// Get by ID
router.route("/:id").get(getSingleContact);

// post
router.route("/").post(AddContact);

// updated
router.route("/:id").put(UpdateContact);

// delete
router.route("/:id").delete(DeleteContact);

module.exports = router;

// 19/08