const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://root:root@cluster0.cxnnan6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});
const userSchema1= new mongoose.Schema({
    name:String ,
    email: String ,
    password:String
});
const userSchema2=new mongoose.Schema({
    Name:String,
    Address:String,
    Mobile:Number,
    Message:String,
    Type:String
});
const User=mongoose.model("clients",userSchema1);
const Donation=mongoose.model("Donation",userSchema2);
// console.log(Donation);
module.exports={
    User,Donation
};