import React from 'react';
import { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Booklist from './components/Booklist';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      allBooks:[]
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(Response => Response.json())
    .then(books => {
      this.setState({
        allBooks: books
      })
    })
  }
  render() {
    return(
      <div className="App">
        <Nav />
        <Header />
        <Booklist books={this.state.allBooks}/>
      </div>
    )
  }
}
export default App
