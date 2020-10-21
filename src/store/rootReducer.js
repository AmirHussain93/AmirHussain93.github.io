import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import userDetailReducer from './reducers/userDetailReducer'

const rootReducer = combineReducers({
    user: userReducer,
    userDetail: userDetailReducer
})

export default rootReducer