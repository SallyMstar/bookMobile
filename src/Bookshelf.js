import React, { Component } from 'react'
import BookDisplay from './BookDisplay'                                                                                 

class Bookshelf extends Component {


	render() {
		const books = this.props.books
		const shelf = this.props.shelf
		console.log(books)

		return (

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">

                    <BookDisplay books={books} updateShelf={this.props.updateShelf} />

                  </div>
                </div>
 
)
}
}

export default Bookshelf