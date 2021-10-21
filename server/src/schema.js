const {gql } = require('apollo-server');

const typeDefs = gql `
    type Query{
        "query to get tracks array for the homepage"
        tracksForHome: [Track!]!
    }



    "a track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "the track title"
        title: String!
        "The track's main author"
        author: Author!
        "the tracks illustration if it has one"
        thumbnail: String
        "The track's length in minutes"
        length: Int
        "The number of modules the track contains"
        modulesCount: Int

    }
    "Author of a complete track"
    type Author {
        id: ID!
        "author's first and last name"
        name: String!
        "link to a profile picture"
        photo: String
    }


`;

module.exports = typeDefs;