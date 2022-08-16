const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema(
    {
        caseDate: {
            type: Date,
            required: true,
        },
        facility: {
            type: String,
            required: true,
        },
        surgeon: {
            type: String,
            required: true,
        },
    },
);

const Case = mongoose.model('Case', caseSchema);
module.exports = Case;