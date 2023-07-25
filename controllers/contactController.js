
const aysncHandler=require("express-async-handler");

const getContact=  aysncHandler(async (req,res)=>{
    res.status(200).json({message:"Get all contacts"})
});
const getSingleContact=aysncHandler(async (req,res)=>{
    res.status(200).json({message:`Get single contacts ${req.params.id}`})
});
const AddContact=aysncHandler(async(req,res)=>{
    const {name,email,phone}= req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All field are mandatory");
    }
    res.status(200).json({message:"Create contacts"})
});
const UpdateContact=aysncHandler(async(req,res)=>{
    res.status(200).json({message:"Updated contacts"})
});
const DeleteContact=aysncHandler(async(req,res)=>{
    res.status(200).json({message:"Deleted contacts"})
});

module.exports={
    getContact,
    getSingleContact,
    AddContact,
    UpdateContact,
    DeleteContact
}