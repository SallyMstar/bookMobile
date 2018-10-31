import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class Bookshelf_yesterday extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	// console.log('Props', this.props)

  state = {
	query: '',
    books: [],
    showSearchPage: false
  }

  

componentDidMount() {
      BooksAPI.getAll().then((books) => {
          books.map((book) => {
            // console.log('Title: '+book.title)
            // console.log('  Subtitle: '+book.subtitle)
            // console.log('  Book ID: '+book.id)
            // console.log('  Shelf: '+book.shelf)
            // console.log('  Authors: '+book.authors)
            // console.log('  Categories: '+book.categories)
            // console.log('  Thumbnail ImageURL: '+book.imageLinks.thumbnail)
            // console.log('==============================')

          })
          this.setState({ books })
          // console.log(this.state.books)
      })
    }

	
	render() {
		const books = this.state.books
		const { query } = this.state

		let currentlyReading = books.filter((book) => {
			return book.shelf === 'currentlyReading'
		})

		let wantToRead = books.filter((book) => {
			return book.shelf === 'wantToRead'
		})

		let read = books.filter((book) => {
			return book.shelf === 'read'
		})

	return (

	<div className='bookshelf-books'>
		<ol className='books-grid'>
			{read.map((book) =>
			<li key = {book.id} style={{
				width: 220,
			}}>
				<div className='book'>
					<div className='book-top'>
						<div className='image-book-cover' style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${book.imageLinks.thumbnail})`
							}}>

                            <form className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>

                                <option onClick={() => this.props.setState({ shelf: wantToRead })} value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </form>

						</div>
					</div>
				</div>
				<div className='book-title'>{book.title}</div>
				<div className='book-authors'>by 
					{book.authors.map((author) =>
					<span key={this.index} className= 'book-authors'> {author}<br /> </span>
				)}
				</div>
			</li>
			)

		}
		</ol>
		</div>
	)
  }
}


export default Bookshelf_yesterday