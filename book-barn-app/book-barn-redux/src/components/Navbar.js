import { Component } from "react";
import { NavLink } from "react-router-dom";
// import '../styles'

export class Navbar extends Component {
    render() {
        return (
            <div className="Nav">
                <NavLink to = "/"><div className="home">Home</div></NavLink>
                <NavLink to = "/bookbarn"><div className="bookBarn">BookBarn</div></NavLink>
                <NavLink to = "/login"><div className="login">Login</div></NavLink>
                <NavLink to = "/add-book"><div className="addBook">Add A Book</div></NavLink>
                <NavLink to = "/cart"><div className="cart">Cart</div></NavLink>
            </div>
        )
    }
}

export default Navbar