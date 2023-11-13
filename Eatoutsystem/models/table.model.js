const mongoose = require("mongoose");
const reservationSchema = require('./reservation.model').schema;

const Schema = mongoose.Schema;
const TableSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    reservation: reservationSchema,
});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;
