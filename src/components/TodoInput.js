import React, {Component} from 'react'
import { connect } from 'react-redux';


class TodoInput extends Component {

    state ={text:''}

    addTodo = ( )=> {
        console.log("addTodo ...")
        this.props.dispatch({type:"ADD", payload:{title:this.state.text}})
        this.setState({text:''})
    }

    render(){

        return(
        <div>
            <h1>TodoInput</h1>
            <input type='text' onChange= {(e) => this.setState({text:e.target.value} ) } value={this.state.text} ></input>
            <button onClick={this.addTodo}>ADD</button>
        </div>
        )
    }

}

export default connect()(TodoInput)