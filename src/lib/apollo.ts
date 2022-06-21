import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4o6mv320th201z75140hvi9/master',
  cache: new InMemoryCache()
})
