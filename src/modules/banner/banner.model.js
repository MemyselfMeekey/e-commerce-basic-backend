const mongoose=require("mongoose")
const bannerSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:2,
    },
    url:String,
    image:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:"inactive"
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        default:null
    },
    updatedBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        default:null
    }
},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true,
})
const bannerModel=mongoose.model("Banner",bannerSchema)
module.exports=bannerModel