import mongoose,{Schema} from 'mongoose';

const userSchema= new Schema({
  rol:{type:String,maxlength:30,required:true},
  name :{type:String,maxlength:50,unique:true,required:true},
  email:{type:String,maxlength:50,unique:true,required:true},
  password:{type:String,maxlength:70,unique:true,required:true},
  estado:{type:Number,default:1},
  createAt:{type:Date ,default:Date.now}
});

const User = mongoose.model('users',userSchema);
export default User;

