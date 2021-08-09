const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracks: [Track!]!
  }

  "A track is a group of Modules on a specific topic."
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "An author is the creator of a track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
