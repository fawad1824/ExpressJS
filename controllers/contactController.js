

const getContact=(req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}
const getSingleContact=(req,res)=>{
    res.status(200).json({message:`Get single contacts ${req.params.id}`})
}
const AddContact=(req,res)=>{
    res.status(200).json({message:"Create contacts"})
}
const UpdateContact=(req,res)=>{
    res.status(200).json({message:"Updated contacts"})
}
const DeleteContact=(req,res)=>{
    res.status(200).json({message:"Deleted contacts"})
}

module.exports={
    getContact,
    getSingleContact,
    AddContact,
    UpdateContact,
    DeleteContact
}