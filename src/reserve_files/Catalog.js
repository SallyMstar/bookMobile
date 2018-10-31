import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Catalog extends Component {

	state = {
		books: [],
		query: '',
		showSearchPage: true
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}


componentDidMount() {
        this.setState({ books: this.props.books })
    }

	
	render () {
		const books = this.state.books
		const { query } = this.state

		let showingBooks
			if(this.state.query) {
					const match = new RegExp(escapeRegExp(this.state.query), 'i')
					showingBooks = books.filter((book) => match.test(book.title))
				} else {
					showingBooks = books
				}

		showingBooks.sort(sortBy('name'))

		return (
          <div className="search-books">
            <div className="search-books-bar">
              <a href='./' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
  		)
}
}

export default Catalog