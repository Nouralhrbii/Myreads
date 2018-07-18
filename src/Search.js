import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

 class Search extends Component{
 	static propTypes = {
    Books: PropTypes.array.isRequired,
    onUpdate:PropTypes.func.isRequired
  }
  state = {  
    query: '',
    BookSearch: []
  }
  
  getBooks=(event)=>{

  	const query = event.target.value
    this.setState({ query: query })
   
   if(query)
    BooksAPI.search(query).then((books)=>{
    	if(books.length > 0){


//The option "None" should be selected if a book has not been assigned to a shelf
    for (let bookn of books) {
      bookn.shelf = 'none'
    }
//the correct shelf should be selected on the search page

    for (let book of books) {
      for (let b of this.props.Books) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    		this.setState({ BookSearch: books })


    	}
    	
    	
        else
        	this.setState({ BookSearch: [] })

    })
    else this.setState({ BookSearch: [] })



  }

   onUpdate=(book,shelf) =>{
   	this.props.onUpdate(book,shelf);


   }

  render(){

  	const{query,BookSearch} = this.state

  	return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"  value={ query }
                onChange={ this.getBooks } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {BookSearch.length > 0 &&( BookSearch.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) =>{this.onUpdate(book,shelf)}} />)) ) }
          </ol>
        </div>
      </div>
    )
  }



 }


export default Search