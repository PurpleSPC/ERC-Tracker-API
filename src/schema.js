const {gql} = require('apollo-server-express');

//createss a gql schema
module.exports = gql`
enum AssetStatus {
    AVAILABLE
    ON_CASE
    DOWN_RESTOCK
    DOWN_BACKORDER
    PROBLEM
}
type Asset {
    assetId: ID!
    assetVendor: String!
    assetName: String!
    #for tray#,ERC#, etc. perhaps rename?
    assetReference: String!
    assetLocation: String!
    assetStatus: AssetStatus!
}
type Case {
    caseId: ID!
    caseSurgeon: String!
    caseFacility: String!
}
type Request {
    requestId: ID!
    requestTeam: String!
    requestAssetVendor: String!
    requestAssetName: String!
    requestShipLocation: String!
    requestNotes: [String!]
    #this is nullable so that null= not reserved or a reserveId is stored once reserve is created
    requestIsReserved: String
}
type Reserve {
    reserveId: ID!
    reserveTeam: String!
    reserveAssetVendor: String!
    reserveAssetName: String!
    reserveShipLocation: String!
    reserveNotes: [String!]
    #this is nullable so that null= not reserved or a reserveId is stored once reserve is created
    reserveIsShipped: String
}
type Shipment {
    Id: ID!
    Team: String!
    AssetVendor: String!
    AssetName: String!
    ShipLocation: String!
    Notes: [String!]
    #this is nullable so that null= not reserved or a reserveId is stored once reserve is created
    requestIsReserved: String
type Query{
    cases: [Case!]!,
    assets: [Asset!]!
}

type Mutation {
    newCase(caseDate: String!, caseFacility:String!, caseSurgeon: String!): Case!,
    newAsset(assetVendor: String!, 
        assetName: String!, 
        assetReference: String!, 
        assetLocation: AssetStatus!,
        assetStatus: String!): Asset!
}
`;
