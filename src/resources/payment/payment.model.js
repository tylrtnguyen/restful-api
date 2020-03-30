import mongoose from 'mongoose'

const Schema = mongoose.Schema

let paymentSchema = new Schema({
    amount:{
        type:Number,
        required: true
    },
    amount_refunded: {
        type: Number,
        require: true
    },
    arrival_date: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    failure_message: {
        type: String
    },
    failure_code: {
        type: Number
    },
    source_type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

export const Payment = mongoose.model('payment', paymentSchema)