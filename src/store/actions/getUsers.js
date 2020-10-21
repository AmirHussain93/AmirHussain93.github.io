import { types } from '../constants'
import axios from 'axios'

const getUsersLoading = () => {
    return {
        type: types.GET_USERS
    }
}

const getUsersSuccess = (response) => {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: response
    }
}

const getUsersFailure = (error) => {
    return {
        type: types.GET_USERS_ERROR,
        payload: error
    }
}

const getUsers = () => {
    return (dispatch) => {
        dispatch(getUsersLoading())
        axios.get('https://reqres.in/api/users?delay=3').then(response => {
            const success = response.data
            dispatch(getUsersSuccess(success))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getUsersFailure(errorMsg))
        })
    }
}

export default getUsers