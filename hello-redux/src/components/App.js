import '../App.css';
import {connect} from 'react-redux'
import AddSubtractCounter from './AddSubtractCounter'
import DisplayCounter from './DisplayCounter'
import IncrementDecrementCounter from './IncrementDecrementCounter'

function App(props) {

  return (
    <div className="App">
        <IncrementDecrementCounter />
        {props.counter}
        <AddSubtractCounter />
        <DisplayCounter />
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    counter: state.counter
  }
}



export default connect(mapStateToProps)(App)

