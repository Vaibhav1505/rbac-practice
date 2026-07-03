const mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    status: {
        type: String,
        default: "new",
        enum: ["new", "contacted", "qualified"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},)

module.exports=mongoose.model("Lead",leadSchema);