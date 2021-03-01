const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, `Please enter first name`],
        },
        last_name: {
            type: String,
            required: [true, `Please enter last name`],
        },
        phone: {
            type: String,
            required: [true, `Please enter phone number`],
            validate(value) {
                const regex = /^\d{1}-\d{3}-\d{3}-\d{4}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid phone number 5-555-555-5555 `)
                }
            }
        },
        email: {
            type: String,
            required: [[true,], `please enter an email`],
            unique:[true,"This email already exist"],
            validate(value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(value)) {
                    throw new Error(`Please enter a valid email address`)
                }
            }
        },
        password: {
            type: String,
            required: [[true,], `please enter a password`],
            validate(value) {
                const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
                if (!regex.test(value)) {
                    throw new Error(`Please enter a valid password:at least 8 characters\n at least 1 numeric character\n at least 1 lowercase letter\n at least 1 uppercase letter\n at least 1 special character\n`)
                }
            }
        },
        authlevel:{
            type: String,
            default:"user",
            required: [true,"a user must have authentication level"]
        }
    }
)

module.exports = mongoose.model(`User`, userSchema)