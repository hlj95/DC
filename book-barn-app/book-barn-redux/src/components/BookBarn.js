

import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';


function BookBarn(props) {
    useEffect(() => {
        fetch('')
            .then((response) => response.json())
            .then((books) => {
            props.onAllBooks(books);
        });
    }, []);


    const books = props.allBooks.map(book => {
        return <div  className="eachBook">
                <label>{book.title}</label>
                <label>GENRE : {book.genre}</label>
                <label>YEAR : {book.year}</label>
                <label>PUBLISHER : {book.publisher}</label>
                <button onClick = {() => props.onUpdate(cart)}> ADD TO CART </button>
               </div>
    })


    return (
        <div className="bookbarn">
            <div className="bbb">BookBarn</div>
            <div className="books">{books}</div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        allBooks: state.booksR.books,
        cart: state.cartR.cart
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAllBooks: (books) => dispatch(actionCreators.allBooks(books)),    
        onUpdate: (book) => dispatch(actionCreators.update(book))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookBarn)

