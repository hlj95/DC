
import Navbar from './Navbar'

function BaseLayout(props) {
    return (
        <div id="layout">
            <Navbar />
            {props.children}
        </div>
    )
}

export default BaseLayout