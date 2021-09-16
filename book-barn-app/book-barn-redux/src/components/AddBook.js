
import { connect } from "react-redux";
import { useState } from "react";
import * as actionCreators from "../store/creators/actionCreators";

// import { allBooks } from "../store/creators/actionCreators";


function AddBook(props) {
    const[book, setBook] = useState({})

    const handleOnChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
    })}

    const newBook = () => {
            fetch('', {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body:JSON.stringify(book)
            })
            .then(response => response.json())
            .then((result) => { 
                setBook(result)
            })
            props.onNewBook(book)
        }


    return(
        <div className="addBook">
            <div className="abtitle">Add A Book</div>
            <input type="text" name="title" placeholder="Title" onChange={handleOnChange} />
            <input type="text" name="genre" placeholder="Genre" onChange={handleOnChange} />
            <input type="text" name="publisher" placeholder="Publisher" onChange={handleOnChange} />
            <input type="text" name="year" placeholder="Year" onChange={handleOnChange} />
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleOnChange} />
            <button onClick={newBook}>Add Book</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onNewBook: (book) => dispatch(actionCreators.addBook(book))
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksR.book
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBook)

