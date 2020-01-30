import React, { Component } from 'react';
import Book from './Book';
class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: props.books
        }
    }
    addToWishList = (book) => {
        console.log(book)
        this.props.addToWishList(book)
    }
    render() {
        return (
            <div>
                <h2>BookList</h2>
                {
                    this.state.books.map((book) => {
                        return <Book key={book.id} book={book} addToWishList={this.addToWishList} />
                    })
                }
            </div>
        )
    }
}
export default Booklist;