const initialState = {
    counter : 0
}

const reducer = ( state = initialState, action) => {
    if (action.type === ' INCREMENT ' ) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if ( action.tyoe === ' DECREMENT ' ) {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if ( action.type === ' ADD ' ) {
        return {
            ...state,
            counter:state.counter + action.payload
        }
    } else if ( action.type === ' SUBTRACT ' ) {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    return state
}

export default reducer