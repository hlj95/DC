import { Component } from "react";
import '../styles/nav.css'

class Nav extends Component {
    render() {
        return(
            <div className="nav">
                <h1>Goodreads</h1>
                <h2>Home</h2>
                <h2>My Books</h2>
                <h2>Browse</h2>
                <h2>Community</h2>
                <h2>Sign In</h2>
            </div>
        )
    }
}

export default Nav