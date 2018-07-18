import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = { Books: [] }

  componentDidMount() {
    // get books on load
    this.fetch_books_details()
  }

 fetch_books_details= () => {BooksAPI.getAll().then((books) => {
       this.setState({Books: books})
     })
    
     }

  onUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetch_books_details()
    })
    
  }

  render() {
  const { Books } = this.state
    return (
      <div className="app">
      <Route exact path='/' render={() => (
           <div>
         < BookList Books={Books} onUpdate={this.onUpdate}/>
          <div className="open-search">
              <Link to="/search">Search</Link>
              
            </div>
            </div>
          
        )}/>
       
        <Route path='/search' render={({ history }) => (
           <Search Books={Books} onUpdate={(book, shelf)=>{
            this.onUpdate(book, shelf);
            history.push('/')

           }}/>
          
        )}/>
     </div>
     )

  }      
}

export default BooksApp
