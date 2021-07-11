
const jwt=require("jsonwebtoken")

// to secure sensitive data
require("dotenv").config()

const checkToken=(req,res,next) =>
{
    let tokenWithBearer=req.headers.authorization;
    let token
    if(tokenWithBearer===undefined)
    {
        return res.send({message:"Unauthorized access"})
    }
    else
    {
        token=tokenWithBearer.split(" ")[1]
        jwt.verify(token,process.env.SECRET,(err,decoded) =>
        {
            if(err)
            {
                return res.send({message:"Session expired...Login to continue"})
            }
            else
            {
                next()
            }
        })
    } 

}


module.exports=checkToken; 

