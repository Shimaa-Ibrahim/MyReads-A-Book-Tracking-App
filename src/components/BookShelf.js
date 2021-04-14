import React from 'react'
import PropTypes from 'prop-types';

import Book from './Book'


const BookSelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                {props.books !== 0 ? <ol className="books-grid">
                    {props.books.map(book => (
                        <li key={book.id}><Book book={book} updateShelf={props.updateShelf} /></li>
                    ))
                    }
                </ol> : <p style={{ textAlign: 'center' }}>No books in this shelf!</p>
                }
            </div>
        </div>
    )
}

BookSelf.PropTypes = {
  books : PropTypes.array.isRequired,
  updateShelf:  PropTypes.func.isRequired

}

export default BookSelf;