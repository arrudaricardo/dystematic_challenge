import { render } from 'react-dom'
import React from 'react'
import App from './components/App'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/graphql_client'
import CssBaseline from '@material-ui/core/CssBaseline';

render(
  <ApolloProvider client={client}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ApolloProvider>,
  document.getElementById('root'))

