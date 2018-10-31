import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookDisplay from './BookDisplay'                                                                                 




class Catalog extends Component {
	
	state= {
			query: '',
			books: [],
			error: false,
			showSearchPage: true
	}

	bookFinder = (searchTerm) => {
		this.setState({query: searchTerm})
		this.catalogSearch()
	}

	catalogSearch = () => {
		if(this.state.query === '') {
			this.setState({error: false, books: []})
			return
		} else {
		BooksAPI
			.search(this.state.query)
			.then(response => {
				if(response.length) {
				this.setState({books: response})
				}})
		}
	}

	render() {
		const books = this.state.books
		console.log(books)
		return (

          <div className="search-books">
            <div className="search-books-bar"  >

              <Link to='/' 
              	className="close-search" >
              	Close
              </Link>

              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                	type="text" 
                	placeholder="Search by title or author" 
					value={this.state.query}
					onChange={(event) => this.bookFinder(event.target.value)} 
                	/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                <BookDisplay books={books} updateShelf={this.props.updateShelf} />
                <p>
					<a href="https://pngtree.com/free-vectors"> free blank book image vector from pngtree.com</a>
          		</p>
              </ol>

            </div>
      </div>


)
}}

export default Catalog