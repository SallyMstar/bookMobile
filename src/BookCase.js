import React, { Component } from 'react'
import Bookshelf from './Bookshelf'                                                                                 


const BookCase = (props) => {

    let backpack = props.books

	return (
      <div>
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'currentlyReading'
                  })} 
          shelf={'Currently Reading'} 
          updateShelf={props.updateShelf} />
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'wantToRead'
                  })} 
          shelf={'Bucket List Books'} 
          updateShelf={props.updateShelf} />
      <Bookshelf 
          books={backpack.filter((book) => {
                    return book.shelf === 'read'
                  })} 
          shelf={'Been there, done that... :)'} 
          updateShelf={props.updateShelf} />
      </div>
	)
}


export default BookCase