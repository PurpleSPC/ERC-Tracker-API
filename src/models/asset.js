const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema(
    {
        assetName : {
            type: String,
            required: true,
        },
        assetRef : {
            type: String,
            required: true,
        },
        assetStatus: {
            type: String,
            required: true,
        },
        assetLocation: {
            type: String, 
            required: true,
        }

    },
);

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;