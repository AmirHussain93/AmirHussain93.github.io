import { types } from '../constants'
import axios from 'axios'

const getUserDetailsLoading = () => {
    return {
        type: types.GET_USER_DETAIL
    }
}

const getUserDetailsSuccess = (response) => {
    return {
        type: types.GET_USER_DETAIL_SUCCESS,
        payload: response
    }
}

const getUserDetailsFailure = (error) => {
    return {
        type: types.GET_USER_DETAIL_ERROR,
        payload: error
    }
}

const getUserDetail= (data) => {
    return (dispatch) => {
        dispatch(getUserDetailsLoading())
        axios.get(`https://reqres.in/api/users?id=${data.id}`).then(response => {
            const success = response.data
            dispatch(getUserDetailsSuccess(success))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(getUserDetailsFailure(errorMsg))
        })
    }
}

export default getUserDetail