const mongoose = require('mongoose');

const userCardSchema = new mongoose.Schema(
    {
        cardstatus: {
            type: String,
            enum:['Active','InActive']
        },
        card_holder: {
            type: String,
            required: [true, `Please enter card holder`],
        },
        cardnumber: {
            type: String,
            required: [true, `Please enter card number`],
            unique: [true,"card number already exists"],
            validate(value) {
                const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid card number 5555-5555-5555-5555 `)
                }
            }
        },
        cardexpiryMonth: {
            type: String,
            required: [true, `Please enter expiry Month`],
            validate(value) {
                const regex = /^\d{2}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid expiry month`)
                }
            }
        },
        cardexpiryYear: {
            type: String,
            required: [true, `Please enter expiry Year`],
            validate(value) {
                const regex = /^\d{4}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid expiary year`)
                }
            }
        },
        cardsec: {
            type: String,
            required: [true, `Please enter security number`],
            validate(value) {
                const regex = /^\d{3}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid security number 555`)
                }
            }
        },
        email: {
            type: String,
            required: [true, `please enter an email`],
            unique: [false,"it's ok"],
            validate(value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(value)) {
                    throw new Error(`Please enter a valid email address`)
                }
            }
        },
    }
)

module.exports = mongoose.model(`UserCard`, userCardSchema)