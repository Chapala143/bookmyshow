import mongoose from "mongoose"

mongoose.set('strictQuery', false);


const connectToDatabase = async() => {
    try {
        const {connection} = await mongoose.connect(
    `mongodb+srv://cnriict24:${process.env.DATABASE_PASSWORD}@cluster0.rjqis.mongodb.net/bookmyshow?retryWrites=true&w=majority&appName=Cluster0`
    )

    
    
        if (connection) {
            console.log(`Connected to databse ${connection.host}`);
        }

    } catch(e) {
        console.log(e);
    }
}

export default connectToDatabase;