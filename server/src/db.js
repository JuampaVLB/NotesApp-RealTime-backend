import mongoose from "mongoose";
import { MONGODB_URI } from './config.js';

mongoose.set("strictQuery", true);

export const connectDB = async () => {
    try {
        
        await mongoose.connect(MONGODB_URI);
        
        console.log('connect to db');
    
    } catch(err) {
      
        console.log(err);
    
    }
};