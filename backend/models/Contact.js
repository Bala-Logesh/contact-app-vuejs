import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add the contact name']
    },
    email: {
        type: String,
        unique: [true, 'Email already in use'],
        required: [true, 'Please add the contact email']
    },
    phone: {
        type: String,
        required: [true, 'Please add the contact phone']
    },
    designation: {
        type: String,
        required: [true, 'Please add the contact designation']
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact