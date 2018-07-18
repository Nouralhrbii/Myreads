import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component{

 static propTypes = {
    Books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

   
 
render() {
const { Books } = this.props

 return(

 	  <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf Books={Books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onUpdate={this.props.onUpdate}/>
            <BookShelf Books={Books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onUpdate={this.props.onUpdate}/>
            <BookShelf Books={Books.filter((book) => (book.shelf === "read"))} title="Read" onUpdate={this.props.onUpdate}/>
          </div>
        </div>
       
      </div>


 	)


  }
}
export default BookList
