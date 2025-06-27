import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Anuj:9826989198@cluster0.yd5mg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}