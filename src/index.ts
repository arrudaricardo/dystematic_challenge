import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import cors from "cors";
import { resolve } from "path";

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
server.applyMiddleware({ app });


app.use(express.static(`${process.cwd()}/client/dist/`))
app.get("/", (req, res) => {
  res.sendFile(resolve(process.cwd(), 'dist/', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen({ port }, () => {
  console.log(`Server running at localhost:${port}`);
  console.log(__dirname, process.cwd())
  console.log(
    `Graphql endpoint running localhost:${port}${server.graphqlPath}`
  );
});
