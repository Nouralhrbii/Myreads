import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component{

	static propTypes = {
    Books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
  }





	render(){

    const {Books,title} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Books.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) => {this.props.onUpdate(book, shelf)
            }}/>))}
          </ol>
        </div>
      </div>
    )



	}





}
export default BookShelf