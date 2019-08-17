import uuid from 'uuidv4'

const initialTodo = {arr:[]}




function todoReducer(state = initialTodo, action){

    console.log('todoReducer', state, action)

    const {type, payload} = action

    let newState = null
    let newArr = null

    const removeObj = (arr, tno) => {

        return arr.filter((obj) => obj.tno != tno )

    }

    const findObj = (arr, tno) => {

        return arr.filter((obj) => obj.tno === tno )[0]

    }

    switch(type){
        case 'ADD':
            const todo = {tno:uuid(), title: payload.title, complete: false}
            newArr = [...state.arr, todo]
            newState = {arr: newArr}
            break
        case 'REMOVE':
            newState = {arr:removeObj(state.arr, payload.tno)}
            break
        case 'UPDATE_COM':

            const targetObj = findObj(state.arr, payload.tno)
            const newObj = Object.assign({}, targetObj, {complete: !targetObj.complete})
            newArr = [...removeObj(state.arr, payload.tno), newObj]
            newState = {arr: newArr}

            break
        default:
            newState = state
    }

    state = newState

    return newState

}

export default todoReducer
