const mongoose = require("mongoose")
const medicineSchema = new mongoose.Schema(
    {
        name: String,
        quantity: Number,
        price: Number,
        descreption: String,
    }
)

const Medicine = mongoose.model("Medicine",medicineSchema)
module.exports = Medicine