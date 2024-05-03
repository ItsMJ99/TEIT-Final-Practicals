import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:String,
    Roll_No: Number,
    WAD_Marks:Number,
    CC_Marks:Number,
    DSBDA_Marks:Number,
    CNS_Marks:Number,
    AI_Marks:Number,
});

const StudentModel = mongoose.model('student marks',StudentSchema);
export default StudentModel;