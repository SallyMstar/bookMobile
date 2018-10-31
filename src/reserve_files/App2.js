import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import Catalog from './Catalog'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books})
      })
    }

updateShelf = (book, shelf) => {
  BooksAPI.update(book.shelf)
      .then(response => {
          let bookList = this
          .state
          .books;
          bookList[0].shelf = shelf
      })
      .then((bookList) => {
        this.setState({books: bookList})
      })
      let backpack = this.state.books
}


  render() {

    let backpack = this.state.books
    // const { query } = this.state

    let currentlyReading = backpack.filter((book) => {
      return book.shelf === 'currentlyReading'
    })

    let wantToRead = backpack.filter((book) => {
      return book.shelf === 'wantToRead'
    })

    let read = backpack.filter((book) => {
      return book.shelf === 'read'
    })


    return (
      <div className="app">
          {this.state.showSearchPage ? (
            <Catalog />

            ) : (

              <div className="list-books">

                    <div className="list-books-title">
                      <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <Bookcase 
                            shelf='currentlyReading' 
                            books={currentlyReading} 
                            name='Currently Reading' 
                            updateShelf = {this.updateShelf}
                            />
                        <Bookcase 
                            shelf='wantToRead' 
                            books={wantToRead} 
                            name='Bucket List' 
                            updateShelf = {this.updateShelf}
                            />
                        <Bookcase 
                            shelf='read' 
                            books={read} 
                            name='Been there, Done that :)' 
                            updateShelf = {this.updateShelf}
                            />
                    </div>

              </div>

            )}
            <div className="open-search">
              <a href='./#catalog' onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>

      </div>

    )
  }
}

export default BooksApp
