import mongoose from 'mongoose';

const {Schema} = mongoose;

const timeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },

});

const Time = mongoose.model("Time", timeSchema);

export default Time;