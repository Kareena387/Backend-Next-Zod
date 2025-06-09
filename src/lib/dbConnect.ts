import mongoose from "mongoose";


type ConnectionObect = {
    isConnected?: number

}
const connection: ConnectionObect = {}

async function dbConnect():Promise<void>{
    if (connection.isConnected) {
        console.log("Already connected to database");
    }try {
        const db = await mongoose.connect(process.env.MONGODB_URI|| '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully")
        
    } catch (error) {
        console.log("DB connection failed", error);


        process.exit(1)
        
    }
}
    
export default dbConnect;
    

