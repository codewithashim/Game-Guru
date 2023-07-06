const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password: 
    {
        type: String,
        required: true
    }
})
// now we need to create a collections

const Signin = new mongoose.model("Signin", userSchema);

module.exports = Signin;