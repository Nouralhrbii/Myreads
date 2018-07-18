import React, { Component } from 'react';
import PropTypes from 'prop-types'
import noCover from './icons/no-cover.png'

class Book extends Component{
  
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired

  }



	render(){
   const book = this.props.book

   // The search works correctly when a book does not have a thumbnail or an author.
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : "No title available"


    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${coverImg}")`
            }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e)=>this.props.onUpdate(e.target.value)} value={book.shelf}>
                <option value="NAN" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )


	}





}
export default Book