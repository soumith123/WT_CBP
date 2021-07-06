// importing express module
const exp=require('express')


// assiging express module to app
const app=exp();

app.use(exp.json())


const path=require("path")

app.use(exp.static(path.join(__dirname,'./dist/COVIDHOSPITALMANAGEMENT/')))



// importing apis 
const userApi=require("./APIS/user-api")


// executing specific api based on path
app.use("/user",userApi)

userApi.use(exp.json());


// Handling errors when path is not found
app.use((req,res,next) =>
{
    res.send({message:`path ${req.url} is not found...`})
})


// Handling errors
app.use((err,rew,res,next) =>
{
    res.send({message:`${err.message}`})
})




// creating port
const port=3000;

app.listen(port, () => console.log(`server listening on port ${port}...` ))

