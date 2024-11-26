import mongoose from "mongoose";

const connectToDB = async () => {

    const { connection } = await mongoose.connect(
        `mongodb+srv://cnriict24:${process.env.DATABASE_PASSWORD}@cluster0.rjqis.mongodb.net/user_db?retryWrites=true&w=majority&appName=Cluster0`
    )
    if (connection) {
        console.log(`Database connected at ${connection.host}`)
    }
}

export default connectToDB;