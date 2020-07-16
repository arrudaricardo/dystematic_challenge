import { ApolloClient, InMemoryCache, ApolloLink} from '@apollo/client';
import { onError } from "@apollo/client/link/error";

import { createHttpLink } from "apollo-link-http";

const port = process.env.PORT || 4000;
const httpLink = createHttpLink({ uri: `http://localhost:${port}/graphql` });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

  const link = ApolloLink.from([
    errorLink,
    httpLink,
  ])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
