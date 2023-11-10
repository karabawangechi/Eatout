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
    isAvailable: {
        type: Boolean,
        default: true,
    },
    reservation: reservationSchema,
});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;
