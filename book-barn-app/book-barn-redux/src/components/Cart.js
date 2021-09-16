import { connect } from 'react-redux';
import {useState} from 'react';

function Cart(props) {

    const cartItems = props.cart.map((book, index) => {
        return <li key = {index}>
                <h2>{book.title}</h2>
                <h3>{book.genre}</h3>
                <h4>{book.publisher}</h4>
                <h4>{book.year}</h4>
                <img src={book.coverImageUrl} alt=""/>
               

            </li>
    })

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems}
            </ul>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        cart: state.cartR.cart
        
    }
}

export default connect(mapStateToProps)(Cart)