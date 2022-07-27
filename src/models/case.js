const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema(
    {
        dos: {
            type: String,
            required: true,
        },
        hospital: {
            type: String,
            required: true,
        },
    },
);

const Case = mongoose.model('Case', caseSchema);
module.exports = Case;