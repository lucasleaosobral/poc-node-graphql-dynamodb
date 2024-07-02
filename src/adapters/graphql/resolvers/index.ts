import {gameResolver} from "./gameResolver";

const resolvers = {
    Query: {
        ...gameResolver.Query
    },
    Mutation: {
        ...gameResolver.Mutation
    }
}

export {resolvers}