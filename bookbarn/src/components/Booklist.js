
import { Component } from "react";
import '../styles/booklist.css'

class BookList extends Component {
    render() {

        const imgURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'

        const bookItems = this.props.books.map((book, index) => {
            return <li key={index} className="BookLI">
                <img src={imgURL+book.imageLink}  className="bookImg"/>
                <p className="title">{book.title}</p>
                <p className="author">Author: {book.author}</p>

            </li>
        })

        return (
            <div>
                <ul className="BooksUL">
                    {bookItems}
                </ul>
            </div>
        )
    }
}

export default BookList
