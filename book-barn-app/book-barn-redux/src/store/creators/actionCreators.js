import * as actionTypes from '../actions/actionTypes';



////CART COUNTER
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}



//{type: 'ADD_BOOK', payload: book}

export const addBook = (book) => {
    return {
        type: actionTypes.ADD,
        payload: book
    }
}
export const deleteBook = (book) => {
    return {
        type: actionTypes.DELETE,
        payload: book
    }
}

export const allBooks = (book) => {
    return {
        type: actionTypes.ALL,
        payload: book
    }
}
export const update = (book) => {
    return {
        type: actionTypes.UPDATE,
        payload:book
    }
}
