import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  const httpLink = createHttpLink({
    uri: "https://uk.api.8base.com/cl5iq46m908mz09mh1dvvd2g7",
  });
  
  const cache = new InMemoryCache();
  
  export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });