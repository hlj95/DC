import { connect } from "react-redux";

function DisplayCounter(props) {
    return (
        <div className="display">
            <label>Counter</label>
            {props.counter}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter
    }
}
export default connect(mapStateToProps)(DisplayCounter)