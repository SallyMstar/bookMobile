import React, { Component } from 'react'

class ShelfSelector extends Component {

  state = {
    selectedShelf: this.props.shelf
  }

componentDidMount() {
  this.setState({selectedShelf: this.props.book.shelf})
}


render() {

	const updateShelf = this.props.updateShelf
	const book = this.props.book
	
	return (
	                        	<div className="book-shelf-changer">
		                             <select
		                                value={this.state.selectedShelf}
		                                onChange={(e) => updateShelf(book, e.target.value)}>

		                                <option value="move" disabled>Move to...</option>
		                                <option value="currentlyReading">Currently Reading</option>
		                                <option value="wantToRead">Want to Read</option>
		                                <option value="read">Read</option>
		                                <option value="none">None</option>

		                             </select>
                            	</div>
	)
}
}

export default ShelfSelector