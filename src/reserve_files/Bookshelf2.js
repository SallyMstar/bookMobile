import React, { Component } from 'react'
import ShelfSelect from './ShelfSelect'
import * as BooksAPI from './BooksAPI'


class Bookshelf extends Component {

		constructor() {
		super();
		this.state = {
			books: [],
		    showSearchPage: false
			}
		}

		componentDidMount() {
	this.setState({books: this.props.books})
    }

	render () {
		const books = this.props.books
		const currentlyReading = (books) => {
		      	books.filter((book) => {
        		return book.shelf === 'currentlyReading'
      		})


	return (

	<div className='bookshelf-books'>
		<ol className='books-grid'>
			{books.map((book) =>
			<li key={book.id} style={{
				width: 200,
				}}>
				<div className='book'>
					<div className='book-top'>
						<div className='image-book-cover' style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${book.imageLinks.thumbnail})` 
								}}>

							<ShelfSelect 
								book={book}
								updateShelf={this.props.updateShelf}
								/>


						</div>
					</div>
				</div>
				<div className='book-title'>{book.title}</div>
				<div className='book-authors'>by 
					{book.authors.map((author) =>
					<span key={book.id} className= 'book-authors'> {author}<br /> </span>
				)}
				</div>
			</li>
			)}
		</ol>
	</div>
	)
}
}

export default Bookshelf