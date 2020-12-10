
import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { gql, useQuery } from '@apollo/client'

const ALL_AUTHORS = gql`
  query getAuthors{
    allAuthors {
      name
      born
      bookCount
    }
  }
`
const ALL_BOOKS = gql`
  query getBooks {
    allBooks{
      title
      author
      published
    }
  }
`

const App = () => {
  const authorResult = useQuery(ALL_AUTHORS)
  const booksResult = useQuery(ALL_BOOKS, {
    pollInterval: 2000
  })

  const [page, setPage] = useState('authors')
  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'}
        authors={authorResult.data}
      />

      <Books
        show={page === 'books'}
        books = {booksResult.data}
      />

      <NewBook
        show={page === 'add'}
      />

    </div>
  )
}

export default App