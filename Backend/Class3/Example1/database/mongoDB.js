import mongoose from "mongoose";

const connectToDB = async() => {
    try {
        const { connection } = await mongoose.connect(
            'mongodb+srv://cnriict24:2NmUAp5KAPU4bsZL@cluster0.rjqis.mongodb.net/user_db?retryWrites=true&w=majority&appName=Cluster0'
 )
 if(connection){
    console.log(`connected to database:${connection.host}`);
 }
    } catch (e) {
        console.log(e);
    }
}

export default connectToDB;