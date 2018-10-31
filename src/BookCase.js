import React, { Component } from 'react'
import Bookshelf from './Bookshelf'                                                                                 


class BookCase extends Component {

render() {

    let backpack = this.props.books

	return (
      <div>
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'currentlyReading'
                  })} 
          shelf={'Currently Reading'} 
          updateShelf={this.props.updateShelf} />
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'wantToRead'
                  })} 
          shelf={'Bucket List Books'} 
          updateShelf={this.props.updateShelf} />
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'read'
                  })} 
          shelf={'Been there, done that... :)'} 
          updateShelf={this.props.updateShelf} />
      </div>
	)
}

}

export default BookCase