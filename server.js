const express=require("express");
const fs=require("fs/promises");
const path=require("path");
const {User,Donation}=require("./db");
const app=express();


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.post("/Signupdata",async(req,res)=>{
    const readFile= await fs.open("public/main.html","r");
    const stream=readFile.createReadStream();
    console.log(req.body);
    const {name,email,password}=req.body;
    User.find({
        email:email
    }).then(async(user)=>{
        if(user.length!=0){
        const unautho=await fs.open("public/used.html","r");
        const st=unautho.createReadStream();
        st.pipe(res);
    }
    else{
        const user=new User({
            name:name,
            email:email,
            password:password
        });
        user.save()
        .then(newUser => stream.pipe(res))
        .catch(err=>console.log(err));
    }
    })
    
    // res.send("created!");
});
app.post("/loginData",async(req,res)=>{
    const readFile= await fs.open("public/main.html","r");
    const stream=readFile.createReadStream();
    const {email,password}=req.body;
    User.find({
        email:email,
        password:password
    }).then(async(user)=>{
        // res.json(user);
        // console.log(user);
        if(user.length!=0){
            stream.pipe(res);}
        else{
            const unautho=await fs.open("public/unautho.html","r");
            const st=unautho.createReadStream();
            st.pipe(res);
        }
    }).catch((err)=>{
       
    })
});
app.post("/donation",(req,res)=>{
    const {Name,Address,Mobile,Message,Type}=req.body;
    // console.log(req.body);
    const user=new Donation({
        Name:Name,
        Address:Address,
        Mobile:Mobile,
        Message:Message,
        Type:Type
    });
    user.save()
    .then(async()=>{
        const handle=await fs.open("public/thank.html","r");
        const st=handle.createReadStream();
        st.pipe(res);
    });
})
app.listen(3000);