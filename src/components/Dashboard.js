import React, {Component} from 'react'
import { connect } from 'react-redux';
import loginReducer from '../reducers/loginReducer';


class Dashboard extends Component {

    render() {

        const user = this.props.user

        console.log("USER:" + user)

        const loginText = user === null ?"LOGIN":user

        return(
            <div>
                <h1>{loginText}</h1>
            </div>
        )
    }

}

const mapStateToProps = ({loginReducer}) => {

    return loginReducer 
}

export default connect(mapStateToProps)(Dashboard)