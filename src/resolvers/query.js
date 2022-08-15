const { models } = require("mongoose");

module.exports = {
    asset: (parent, args) =>{
        return assets.find(asset => asset.id === args.id)
    },
};