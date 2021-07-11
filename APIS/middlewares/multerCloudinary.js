// importing cloudinary modules
const cloudinary=require("cloudinary").v2;
const multer=require("multer")
const {CloudinaryStorage}=require("multer-storage-cloudinary")

// to secure sensitive data
require("dotenv").config()

cloudinary.config(
{
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


const clsStorage=new CloudinaryStorage(
{
    cloudinary:cloudinary,
    params:async(req,file)=>
    {
        return{
            folder:"covidWebRegisteredUsers",
            public_id:file.fieldname+'-'+Date.now()
        }
    }
})

const multerObj=multer({storage:clsStorage})


module.exports=multerObj;
