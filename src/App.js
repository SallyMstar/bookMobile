import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import BookCase from './BookCase'
import Catalog from './Catalog'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  }

componentDidMount() {
      BooksAPI.getAll().then((books) => {
      books.sort(sortBy('title'))
          this.setState({books: books})
      })
    }

refreshAllBooks = () => {
          this.setState({showSearchPage: false})
}

updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(response => {
            let booklist = this.state.books.slice(0)
            let books = booklist.filter(selectedBook => selectedBook.id === book.id)
          if(books.length) {
              books[0].shelf = shelf
              books.sort(sortBy('title'))
              this.setState({books: booklist})
          } else {
              let bookList = this.state.books
              booklist.push(book)
              booklist.sort(sortBy('title'))
              this.setState({books: booklist})
          }
        })
    }

  render() {


    return (
      <div className="app">
          <Route exact path = '/catalog'
              render = {() => (
                  <Catalog books={this.state.books} updateShelf={this.updateShelf} refreshAllBooks={this.refreshAllBooks} />
          )} />

        <Route exact path='/'
            render={() => (
                <div className="list-books">
                    <div className="list-books-title">
                      <h1>My Reads</h1>
                    </div>

                    <div className="list-books-content">
                      <div>
                        <BookCase books={this.state.books} updateShelf={this.updateShelf} />
                      </div>
                    </div>

                  <div className="open-search">
                      <Link to='/catalog'>Add a book</Link>
                  </div>
                </div>
            )} />
      </div>
    )

  }
}

export default BooksApp
