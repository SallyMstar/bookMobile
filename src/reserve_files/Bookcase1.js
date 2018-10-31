import React, { Component } from 'react'
import Bookshelf from './Bookshelf'


class Bookcase extends Component {

componentDidMount() {
	this.setState({shelf: this.props.shelf})
    }

	
	render () {
		const name = this.props.name
		const books = this.props.books

		return(

		      <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{name}</h2>

					<Bookshelf books={books} updateShelf={this.props.updateShelf} />

                </div>
                </div>

			)
	}}

export default Bookcase