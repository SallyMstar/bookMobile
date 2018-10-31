import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class ShelfSelect extends Component {

  state = {
    selectedShelf: this.props.shelf
  }

componentDidMount() {
  this.setState({selectedShelf: this.props.book.shelf})
}

  render() {
    const book = this.props.book
    const shelf = this.props.shelf
    const updateShelf = this.props.updateShelf


    return(

                            <div className="book-shelf-changer">
                              <select
                                value={this.state.selectedShelf}
                                onChange={(e) => updateShelf(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >
                                	Currently Reading
                                	</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>

    )
}}

export default ShelfSelect