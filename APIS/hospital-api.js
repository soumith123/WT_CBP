// importing express module
const exp=require("express")

// importing router from express module
const hospitalApi=exp.Router();

// middle wear -- useful for post product
hospitalApi.use(exp.json());

// to assign token
const jwt=require("jsonwebtoken")

// to handle asynchronous error
const errorHandler=require("express-async-handler");

// importing cloudinary modules
const multerObj=require("./middlewares/multerCloudinary")

const checkToken=require("./middlewares/verifyToken")


// GET hospital
hospitalApi.get("/gethospitals", errorHandler(async (req,res) =>
{
    let hospitalCollectionObj=req.app.get("hospitalCollectionObj")

    let hospitalList= await hospitalCollectionObj.find().sort({hospitalPrice:1}).toArray()
    
    if(hospitalList === null)
    {
        res.send({message:"Hospitals list is empty"})
    }
    else
    {
        res.send({message:hospitalList})
    }    
}))

// GET hospital
hospitalApi.get("/gethospitalsAdmin", errorHandler(async (req,res) =>
{
    let hospitalCollectionObj=req.app.get("hospitalCollectionObj")

    let hospitalList= await hospitalCollectionObj.find().sort({id:1}).toArray()
    
    if(hospitalList === null)
    {
        res.send({message:"Hospitals list is empty"})
    }
    else
    {
        res.send({message:hospitalList})
    }    
}))



// GET hospital by id using async & await
hospitalApi.get("/gethospital/:hospitalName", errorHandler(async(req, res) => 
{
    let hospitalCollectionObj=req.app.get("hospitalCollectionObj")

    let hospital=req.params.hospitalName;

    let hospitalObj= await hospitalCollectionObj.findOne({hospitalName:hospital});

    if(hospitalObj===null)
    {
        res.send({message:"hospital not existed"})
    }
    else
    {
        res.send({message:hospitalObj})
    }
}))




// POST a hospital
hospitalApi.post("/createhospital",multerObj.single("photo"),errorHandler(async(req,res) =>
{
    let hospitalCollectionObj=req.app.get("hospitalCollectionObj")

    let newHospital=JSON.parse(req.body.hospitalObj);

    let hospital=await hospitalCollectionObj.findOne({hospitalName : newHospital.hospitalName})
    
    if(hospital===null)
    {
        newHospital.profileImage=req.file.path; 
        delete newHospital.photo;
        await hospitalCollectionObj.insertOne(newHospital)
        res.send({message:"New hospital inserted"})
    }
    else
    {
        res.send({message:"hospital already existed"})
    }
}))


// DELETE hospital
hospitalApi.delete("/deletehospital/:hospitalName", errorHandler(async(req,res) =>
{
    let hospitalCollectionObj=req.app.get("hospitalCollectionObj")

    let deletedHospital=req.params.hospitalName;

    let hospital= await hospitalCollectionObj.findOne({hospitalName:deletedHospital})

    if (hospital === null)
    {
        res.send({message:"No hospital existed to delete"})
    }
    else
    {
        await hospitalCollectionObj.deleteOne({hospitalName:deletedHospital})
        res.send({message:"hospital deleted"})
    }
}))




module.exports=hospitalApi
