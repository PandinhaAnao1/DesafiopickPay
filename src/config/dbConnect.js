import mongoose from "mongoose";


const conectNaDataBase = ()=>{
    mongoose.connect('mongodb+srv://altenir:altenir123@cluster0.hq97nww.mongodb.net/?retryWrites=true&w=majority');
    return mongoose.connection;
}

export default conectNaDataBase;