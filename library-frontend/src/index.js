import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { 
    ApolloClient, ApolloProvider, InMemoryCache 
} from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:'http://localhost:4000',
    
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
     document.getElementById('root')
     )