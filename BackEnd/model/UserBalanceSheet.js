const mongoose = require('mongoose');
const userBalanceSheetSchema = new mongoose.Schema(
    {
        indicator: {
            type: String,
            required: [true, `Please Enter document title Cell A1`],
        },
        email: {
            type: String,
            required: [[true,], `please enter an email Cell B2`],
            validate(value) {
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (!regex.test(value)) {
                    throw new Error(`Please enter a valid email address Cell B2`)
                }
            }
        },
        year: {
            type: Number,
            required: [true, `Please enter phone number`],
            validate(value) {
                const regex = /^\d{4}$/
                if (!regex.test(value)) {
                    throw new Error(`enter a valid Year number 2020 `)
                }
            }
        },
        Cash: {
            type: Number,
            required: false,
        },
        Accounts_Receivable: {
            type: Number,
            required: false,
        },
        Prepaid_expenses: {
            type: Number,
            required: false,
        },
        Inventory: {
            type: Number,
            required: false,
        },
        Property_Equipment: {
            type: Number,
            required: false,
        },
        Goodwill: {
            type: Number,
            required: false,
        },
        Accounts_Payable: {
            type: Number,
            required: false,
        },
        Accrued_expenses: {
            type: Number,
            required: false,
        },
        Unearned_revenue: {
            type: Number,
            required: false,
        },
        Long_term_debt: {
            type: Number,
            required: false,
        },
        Other_long_term_liabilities: {
            type: Number,
            required: false,
        },
        Equity_Capital: {
            type: Number,
            required: false,
        },
        Retained_Earnings: {
            type: Number,
            required: false,
        },
    }
)

module.exports = mongoose.model(`UserBalanceSheet`, userBalanceSheetSchema)