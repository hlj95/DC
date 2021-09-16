import * as actionTypes from '../actions/actionTypes';

const initialState = {
    books: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ALL:
            return action.payload;
        case actionTypes.ADD:
            return {
                ...state,
                books: state.books.concat(action.payload)
            };
        case actionTypes.DELETE:
            return {
                ...state,
                books: state.books.filter((book) => book != action.payload)
            };
        default:
            return state    
    }   
}

export default reducer