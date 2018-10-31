import React, { Component } from 'react'
import ShelfSelector from './ShelfSelector'                                                                                 

class BookDisplay extends Component {


render() {
		let books = this.props.books
		console.log(books)

	return (
		<div>
           <ol className="books-grid">
				{books.map((book) =>
 					<li key={book.id} style={{
						width: 200,
						}}>
                        <div className="book">
                          <div className="book-top">
                          {book.imageLinks ?
							(<div className='image-book-cover' style={{
									width: 128,
									height: 193,
									backgroundImage: `url(${book.imageLinks.thumbnail})`
									}}>

									<ShelfSelector 
											book={book} 
											shelf={book.shelf} 
											updateShelf={this.props.updateShelf} />
                          	</div>
                          	):(
							<div className='image-book-cover' style={{
									width: 128,
									height: 193,
								}}>

									<ShelfSelector 
											book={book} 
											shelf={book.shelf} 
											updateShelf={this.props.updateShelf} />
                          	</div>
                          	)}

                       </div>
                          	<div className="book-title">{book.title}</div>
							<div className='book-authors'>by 
								{book.authors && book.authors.join(' & ') || "Author Unlisted"}
							</div>
                        </div>

                      </li>
 				)}

			</ol>
		</div>
	)
}
}

export default BookDisplay