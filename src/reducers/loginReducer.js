const initialState = {user:null}


function loginReducer( state = initialState, action) {

    console.log("login reducer..... ")

    const {type,payload} = action


    if(type === 'LOGIN'){
        return Object.assign({}, state, {user:'user00'})
    }
    

    return state

}

export default loginReducer