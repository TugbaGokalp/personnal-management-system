import mongoose from 'mongoose';
import bcrypt from "bcrypt"; //  hashing at DB

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }

},
{
    timestamps: true
});

//? HASHING

userSchema.pre("save", function(next) {
const user = this;
// console.log("User PASS 1", user.password);
bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    // console.log("User PASS 2", user.password);

    next();
})
});

const User = mongoose.model("User", userSchema);

export default User;