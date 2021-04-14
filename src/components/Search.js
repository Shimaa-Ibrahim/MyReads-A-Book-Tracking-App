import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Book from './Book'
import * as BooksAPI from './../BooksAPI'

class Search extends Component {
    state = {
        books: []
    }

    updateQuery = (query) => {
      if (!query) {
        this.setState({ books: [] })
        return;
      } else {
        BooksAPI.search(query)
          .then(books => {
          this.setState({ books })
          })
            .catch(err => {
            this.setState({ books: [] })
          })
       }
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={e => this.updateQuery(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.books !== 0 ?
                        <ol className="books-grid">
                            {this.state.books.filter(book => book.imageLinks).map(book => (<li key={book.id}><Book book={book} updateShelf={this.updateShelf} /></li>))}
                        </ol> : ''
                    }
                </div>
            </div>
        )
    }
}

export default Search;