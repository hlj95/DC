import { useState } from "react";
import { connect } from "react-redux";

function AddSubtractCounter(props) {
    const [counter, setCounter] = useState('')

    const handleChange = (e) => {
        const count = e.target.value
        setCounter(count)
    }
    const handleAdd = () => {
        props.onAdd(parseInt(counter))
        setCounter('')

    }
    const handleSubtract = () => {
        props.onSubtract(parseInt(counter))
        setCounter('')
    }
    return (
        <div className="counter">
            <label>Add / Subtract</label>

            <input type="text" value={counter} onChange={handleChange} />
            <button className="button" onClick={handleAdd}>+</button>
            <button className="button" onClick={handleSubtract}>-</button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({ type: 'ADD', payload: value }),
        onSubtract: (value) => dispatch({ type: 'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter)