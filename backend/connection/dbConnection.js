import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to database ${connect.connection.name} on ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectToDB