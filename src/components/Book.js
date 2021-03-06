import React from 'react'
import Control from './Control'

const Book = (props) => {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
                <Control book={props.book} updateShelf={props.updateShelf} />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors"> {props.book.authors ? props.book.authors.toString() : 'N/A'}</div>
        </div>
    )
}

export default Book;