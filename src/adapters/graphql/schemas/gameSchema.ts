const gameSchema = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!
#        reviews: [Review!]
    }

    type Query {
#        hello: String
#        reviews: [Review]
#        review(id: ID): Review
        games: [Game],
        game(id: ID): Game
#        authors: [Author],
#        author(id: ID): Author
    }

    type Mutation {
        deleteGame(id: ID!): ID
        addGame(game: AddGameInput): Game
        updateGame(id: ID!, edits: EditGameInput ): Game
    }
    input AddGameInput {
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
`
//
// type Review {
//     id: ID!
//     rating: Int!
//     content: String!
//     game: Game!
//     author: Author!
// }
// type Author {
//     id: ID!
//     name: String!
//     verified: String!
//     reviews: [Review!]
// }

export {gameSchema}