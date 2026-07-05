const mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    description: {
        type: String,
        default: ''
    },
    contact: {
        type: String,
        required: true
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

module.exports = mongoose.model("Lead", leadSchema);