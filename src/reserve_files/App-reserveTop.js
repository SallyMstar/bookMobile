import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
// import Catalog from './Catalog'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    shelf: [
        'currentyReading',
        'wantToRead',
        'read'
        ],
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
        this.setState({ books })
      })
    }



  render() {
    
    const backpack = this.state.books
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
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <Bookshelf books={currentlyReading} />
                </div>
                </div>


              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <Bookshelf books={wantToRead} />
                </div>
                </div>


              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Already Read</h2>
                    <Bookshelf books={read} />
                </div>
                </div>


              </div>
            </div>
            <div className="open-search">
              <a href='./Catalog.js' onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    )
  }
}

export default BooksApp
