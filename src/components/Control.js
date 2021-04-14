import React, { Component } from 'react'
import PropTypes from 'prop-types';

import * as BooksAPI from './../BooksAPI'


class Control extends Component {
   static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
   }
    state = {
        book: {}
    }
    getBook = () => {
        if (this.props.book.shelf) {
            this.setState({ book: this.props.book })
        } else {
            BooksAPI.get(this.props.book.id)
                .then(book => this.setState({ book }))
            console.log(this.state)
        }
    }

    render() {
        const { book } = this.state
        return (
            <div className="book-shelf-changer">
                <select onClick={this.getBook} defaultValue='move' onChange={e => this.props.updateShelf(this.props.book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}>
                        {book.shelf === 'currentlyReading' ? "✔" : ""} Currently Reading
                    </option>
                    <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>
                        {book.shelf === 'wantToRead' ? "✔" : ""} Want to Read
                    </option>
                    <option value="read" disabled={book.shelf === 'read'}>
                        {book.shelf === 'read' ? "✔" : ""} Read
                    </option>
                    <option value="none" disabled={book.shelf === 'none'}> None </option>
                </select>
            </div>
        )
    }
}

export default Control;