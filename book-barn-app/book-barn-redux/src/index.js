import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import booksReducer from './store/reducers/booksReducer';
import cartReducer from './store/reducers/cartReducer';
import BaseLayout from './components/BaseLayout';
import { Route } from 'react-router';
import AddBook from './components/AddBook';
import BookBarn from './components/BookBarn';
import Cart from './components/Cart';

const rootReducer = combineReducers({
  booksR: booksReducer,
  cartR: cartReducer,
})

const store= createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Route component={App} exact path='/' />
          <Route component={AddBook} path='/add-book' />
          <Route component={BookBarn} path='/bookbarn' />
          <Route component={Cart} path='/cart' />
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
