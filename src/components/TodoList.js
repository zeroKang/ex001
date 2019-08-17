 import React from 'react'
import { connect } from 'react-redux'


function TodoList ({arr, dispatch}) {


    const sendRemove = (tno) => {
        dispatch ( { type: 'REMOVE', payload: {tno:tno} } )
    }

    const updateComplete = (tno) => {
        dispatch ( { type: 'UPDATE_COM', payload: {tno:tno} } )
    }


    const list = arr.map( ({tno, title, complete}) => 
      <li key={tno}>{title}---- {complete?'completed':'not yet'}
        <input type='checkbox' onChange = {() => updateComplete(tno) }></input>
        <button onClick={ () => sendRemove(tno) } >REMOVE</button>
      </li>
    )

    return(
        <ul>
            {list} 
        </ul>
    )
}




const mapStateToProps = ({todoReducer}) => {

    console.log(todoReducer)
    return {arr: todoReducer.arr}
}

export default connect(mapStateToProps)(TodoList)