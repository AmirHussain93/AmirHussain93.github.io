import { types } from '../constants'

const intialState = {
    loading: false,
    error: "",
    usersData: "",
}

const userDetailReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_USER_DETAIL:
            return {
                ...state,
                loading: true,
                usersData: "",
                error: "",
            }
        case types.GET_USER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                usersData: action.payload,
                error: "",
            }
        case types.GET_USER_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                usersData: "",
                error: action.payload,
            }
       
        default:
            return state
    }
}

export default userDetailReducer