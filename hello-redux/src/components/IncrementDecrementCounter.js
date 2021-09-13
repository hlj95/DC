import { connect } from "react-redux";

function IncrementDecrementCounter(props) {

    const handleIncrement = () => {
        props.onIncrement()
    }
    const handleDecrement = () => {
        props.onDecrement()
    }
    return (
        <div className="counter">
            <label>INCREMENT / DECREMENT</label>
            <button className = "button" onClick ={handleIncrement}>+</button>
            <button className = "button" onClick ={handleDecrement}>-</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT'}),
        onDecrement: () => dispatch({ type: 'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)