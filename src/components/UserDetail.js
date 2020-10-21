import React from 'react'
import { connect } from 'react-redux'
import getUserDetail from '../store/actions/getUserDetails'

function UserDetail(props) {

    const { getUserDetail, loading, userDetail } = props;

    const userId = props.match.params.id;

    React.useEffect(() => {
        getUserDetail({
            "id": userId
        })
    }, [getUserDetail, userId])

    return (
        <div className="user-detail">
            {
                loading && <div className="spinner-border"></div>
            }
            {
                 !loading && userDetail && <div className="user-box">
                 <h3 className="text-center">{userDetail.data.first_name} {userDetail.data.last_name}</h3>
                    <img className="image" src={userDetail.data.avatar} alt="" />
                     <div className="">
                        <p>Company: {userDetail.ad.company}</p>
                        <p>Email: {userDetail.data.email}</p>
                        <p>{userDetail.ad.text}</p>
                        <p><a href={userDetail.ad.url}>{userDetail.ad.url}</a></p>
                     </div>
                 </div>
            }
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.userDetail.loading,
        userDetail: state.userDetail.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetail: (data) => dispatch(getUserDetail(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)