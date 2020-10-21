import { types } from '../constants'

const intialState = {
    loading: false,
    error: "",
    success: "",
    usersData: "",
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                loading: true,
                success: "",
                error: "",
            }
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload,
                error: "",
            }
        case types.GET_USERS_ERROR:
            return {
                ...state,
                loading: false,
                success: "",
                error: action.payload,
            }
       
        default:
            return state
    }
}

export default userReducer