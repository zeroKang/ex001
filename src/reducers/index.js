import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import todoReducer from './todoReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers( {cartReducer, loginReducer, todoReducer} )

export default rootReducer