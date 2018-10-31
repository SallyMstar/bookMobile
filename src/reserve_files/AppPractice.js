import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookmobile from './Bookmobile'

class BooksApp extends Component {

  state = {
    name: 'Sally',
    age: 50,
    kid1: 'Brynn',
    kid2: 'Carl',
    spouse: 'Brad',
    grandchild: 'Clara'
  }


render(){
  let family = {
      name: this.state.name,
      earlyAge: this.state.age,
      child: [this.state.kid1, this.state.kid2],
      husband: this.state.spouse,
      grandchild: this.state.grandchild}

  return (
  <div>
  <Bookmobile family = {family} earlyAge={family.earlyAge} />
  </div>
  )

}
}
  
export default BooksApp
