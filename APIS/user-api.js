// importing express module
const exp=require("express")

// importing router from express module
const userApi=exp.Router();

// middle wear -- useful for post user
userApi.use(exp.json())

//importing mongodb and MongoClient
const mc=require("mongodb").MongoClient;

// to handle asynchronous error
const errorHandler=require("express-async-handler")

// to convert password to non-readbale format--hashing
const bcryptjs=require("bcryptjs")

// to assign token
const jwt=require("jsonwebtoken")

// const databaseUrl="mongodb+srv://soumith:soumith123@cluster0.vlkyk.mongodb.net/MyFirstdb?retryWrites=true&w=majority"

const databaseUrl="mongodb://soumith:soumith123@cluster0-shard-00-00.vlkyk.mongodb.net:27017,cluster0-shard-00-01.vlkyk.mongodb.net:27017,cluster0-shard-00-02.vlkyk.mongodb.net:27017/MyFirstdb?ssl=true&replicaSet=atlas-14ai65-shard-0&authSource=admin&retryWrites=true&w=majority"

let databaseObj;

let userCollectionObj;  

// connecting to databse
mc.connect(databaseUrl,{ useNewUrlParser:true, useUnifiedTopology: true },(err,client)=>
{
    if(err)
    {
        console.log("Error in connecting database is", err)
    }
    else
    {
        let databaseObj=client.db("covidHospitalManagement")
        userCollectionObj=databaseObj.collection("userCollection")
        console.log("Connected to database....")
    }
})

// GET users using async & await
userApi.get("/getusers", errorHandler(async(req,res) =>
{
    let user=req.body;
    let users= await userCollectionObj.find().toArray();
    if (users == null)
    {
        res.send({message:"Users not exist"})
    }
    else
    {
        res.send({message:users})
    }
    
}))


// GET user by id using async & await
userApi.get("/getuser/:username", errorHandler(async(req, res) => 
{
    let user=req.params.username;
    let userObj= await userCollectionObj.findOne({username:user});
    if(userObj===null)
    {
        res.send({message:"user not existed"})
    }
    else
    {
        res.send({mssage:userObj})
    }
}))





// POST using async & await
userApi.post("/createuser", errorHandler(async(req,res) =>
{
    let newUser=req.body;
    let user=await userCollectionObj.findOne({username:newUser.username})

    if (user===null)
    {
        let hashedPassword=await bcryptjs.hash(newUser.password,7)
        newUser.password=hashedPassword;
        await userCollectionObj.insertOne(newUser)
        res.send({message:"New user created"})
    }
    else
    {
        res.send({message:"user already existed"})
    }
}))





// UPDATE using async & await
userApi.put("/updateuser/:username", errorHandler(async(req,res) =>
{
    let modifiedUser=req.body;
    let product=await userCollectionObj.findOne({username:modifiedUser.username})
    if(product == null)
    {
        res.send({message:"User not found"})
    }
    else
    {
        await userCollectionObj.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
        res.send({message:"User updated"})
    }

    
}))




// DELETE using async & await
userApi.delete("/deleteuser/:username", errorHandler(async(req,res) =>
{
    let deletedUser=req.params.username;
    let user= await userCollectionObj.findOne({username:deletedUser})
    if(user == null)
    {
        res.send({message:"User not existed to delete"})
    }
    else
    {
        await userCollectionObj.deleteOne({username:deletedUser})
        res.send({message:"user deleted"})
    }
}))


// User Login
userApi.post("/login", errorHandler(async (req,res)=>
{
    let credentials=req.body;

    let user = await userCollectionObj.findOne({username:credentials.username})

    if (user === null)
    {
        res.send({message:"invalid username"})
    }
    else
    {
        let result = await bcryptjs.compare(credentials.password, user.password)
 
        if(result== false)
        {
            res.send({message:"invalid password"})
        }
        else
        {
            let signedToken=jwt.sign({username:credentials.username}, 'abcdef', {expiresIn: 120})
            res.send({message:"login success" , token:signedToken, username:credentials.username})
        }
    }
}))


module.exports=userApi;
