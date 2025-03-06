import mongoose from "mongoose";

const bearSchema = new mongoose.Schema({
    src: {
        required: true,
        type: String
    },
    datePosted: {
        type: String,
        required: true
    }
})

export const Bear = mongoose.model('Bear', bearSchema)