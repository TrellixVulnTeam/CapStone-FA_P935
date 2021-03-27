const mongoose = require('mongoose');

const ToUserRequestSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            require: false,
        },
        user: {
            type: String,
            required: [true, `Please enter atopic`],
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
        consultant: {
            type: String,
            required: [true, `Please enter atopic`],
        },
        filetoDownload: {
            type: String,
            required: [true, `Please enter username`],
        },
        created: {
            type: Date,
            default: Date.now
            // type: String,
            // require: false,
        },
    }
)

module.exports = mongoose.model(`ToUserRequest`, ToUserRequestSchema)