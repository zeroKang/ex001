import React, {Component} from 'react'
import { connect } from 'react-redux';



class FakeLogin extends Component {


    doLogin = () => {
        this.props.dispatch({
            type: "LOGIN",
            payload: {id:'user00', pw:'pw00'}
        })
    }

    render() {
        return(
        <div>
            <button onClick = {this.doLogin}> LOGIN </button>
        </div>
        )
    }
}


export default connect()(FakeLogin)


