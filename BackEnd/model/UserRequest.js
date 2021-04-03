const mongoose = require('mongoose');
const UserRequestSchema = new mongoose.Schema(
    {
        reporttype: {
            type: String,
            require: false,
        },
        topic: {
            type: String,
            required: [true, `Please enter atopic`],
        },
        urgency: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: [true, `Please enter Description`],
        },
        email: {
            type: String,
            required: [true, `please enter an email`],
            unique: [false, "it's ok"],
            validate(value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(value)) {
                    throw new Error(`Please enter a valid email address`)
                }
            }
        },
        user_name: {
            type: String,
            required: [true, `Please enter username`],
        },
        created: {
            type: Date,
            default: Date.now
        },
    }
)
module.exports = mongoose.model(`UserRequest`, UserRequestSchema)