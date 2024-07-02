import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./src/adapters/graphql/schemas";
import {resolvers} from "./src/adapters/graphql/resolvers";

const server = new ApolloServer({
        typeDefs,
        resolvers
})

startStandaloneServer(server, {
    listen: {port: 4000}
}).then(r => console.log(`server started on ${r.url}`) )
