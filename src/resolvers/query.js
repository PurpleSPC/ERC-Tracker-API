const { models } = require("mongoose");

module.exports = {
    assets: async (parent, args, {models}) => {
        return await models.Asset.find()
    },
    assetByRef: async (parent, args, {models}) => {
        return await models.Asset.find({assetRef: args.assetRef})
    },
    cases: async (parent, args, {models}) => {
        return await models.Case.find();
    },
    case: async (parent, args, {models}) => {
        return await models.Case.findById(args.id)
    }
};