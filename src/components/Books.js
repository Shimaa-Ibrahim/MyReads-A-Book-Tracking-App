import React, { Component } from 'react'
import { Link } from "react-router-dom";
import BookSelf from './BookShelf'
import * as BooksAPI from './../BooksAPI'

class Books extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({ books }))
    }

    updateShelf = (book, shelf) => {
        const newBookArray = this.state.books.map(b => {
            if (b.id === book.id) {
                b.shelf = shelf;
            }
            return b;
        })
        BooksAPI.update(book, shelf);
        this.setState({
            books: newBookArray
        });
    }

    render() {
        const { books } = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookSelf shelf='Currently Reading' books={books !== 0 ? books.filter(b => b.shelf === 'currentlyReading') : ''} updateShelf={this.updateShelf} />
                        <BookSelf shelf='Want To Read' books={books !== 0 ? books.filter(b => b.shelf === 'wantToRead') : ''} updateShelf={this.updateShelf} />
                        <BookSelf shelf='Read' books={books !== 0 ? books.filter(b => b.shelf === 'read') : ''} updateShelf={this.updateShelf} />

                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }

}

export default Books;