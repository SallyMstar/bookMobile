import React, { Component } from 'react'

class Bookshelf extends Component {


	constructor(props) {
		super();
		this.state = {
			age: props.earlyAge
		}
	}

	onAge() {
		this.setState({
			age: this.state.age + 1
		})
		console.log(this.state.age)
	}


	render() {
		let family = this.props.family;
		console.log(family);
		return (
			<div>
			<h1>Hello, {family.name}, you're {this.state.age}!</h1>
			<button onClick={ ()=> this.onAge() }>Another Birthday?</button>
			<hr />
			<h2>Children:</h2>
			<ul>
			{family.child.map((child, index) =>
				<li key={index}>{child}</li>
				)}
			</ul>
		</div>
	)}
}

export default Bookshelf