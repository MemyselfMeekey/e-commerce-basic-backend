const mongoose=require("mongoose")
const CartModelSchema=new mongoose.Schema({
    buyerId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderId:{
        type:mongoose.Types.ObjectId,
        ref:"Order",
        require:false,
        default:null
    },
    productDetail:{
        productId:{
            type:mongoose.Types.ObjectId,
            ref:"Product",
            required:true, 
        },
        name:{
            type:String
        },
        price:{
            type:Number,
            required:true
        }
    },
    sellerId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:false,
    },
    quantity:{
        type:Number,
        min:1,
        required:true,
    },
    amount:{
        type:Number,
        reuqired:true,
        min:1
    },
    status:{  
        type:String,
        enum:["draft","cancelled","delivered"]
    },
    isPaid:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        deault:false,
    },
    updatedBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        deault:false,
    },      
},{
    timestamps:true,
    autoCreate:true,
    autoIndex:true,
})
const CartModel=mongoose.model("Cart",CartModelSchema)
module.exports=CartModel