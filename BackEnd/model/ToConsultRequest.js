const mongoose = require('mongoose');
const ToConsultRequestSchema = new mongoose.Schema(
    {
        consultant: {
            type: String,
            require: false,
        },
        user: {
            type: String,
            required: [true, `Please enter atopic`],
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
        user_email: {
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
        originalrow: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            default: Date.now

        },
    }
)
module.exports = mongoose.model(`ToConsultRequest`, ToConsultRequestSchema)