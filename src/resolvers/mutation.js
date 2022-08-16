const mongoose = require('mongoose');
const {
    AuthenticationError,
    ForbiddenError
} = require('apollo-server-express');
require('dotenv').config();

module.exports = {
    newAsset: async (parent, args, {models}) => {
        return await models.Asset.create({
            assetVendor: args.assetVendor, 
            assetName: args.assetName, 
            assetRef: args.assetRef, 
            assetLocation: args.assetLocation,
            assetStatus: args.assetStatus 
        })
    },
    newCase: async (parent, args, {models}) => {
        return await models.Case.create({
            caseDate: args.caseDate,
            facility: args.facility,
            surgeon: args.surgeon,
        })
    }
}