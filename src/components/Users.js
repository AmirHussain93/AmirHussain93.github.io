import React from 'react';
import { connect } from 'react-redux';
import getUsers from '../store/actions/getUsers';


function Users(props) {
    const [user, setUsers] = React.useState([]);
    const [category, setCategory] = React.useState('');
    const { getUsers, loading, users } = props;

    React.useEffect(() => {
        getUsers();
    }, [getUsers])


    React.useEffect(() => {
        if (users) {
            setUsers([...users.data])
        }
    }, [users])

    const handleOnClick = (id) => {
        props.history.push(`/userdetail/${id}`)
    }

    const handleCategoryChange = (val) => {
        setCategory(val)
        let arr = [...user];
        let sortedItem = val== "None" ? "none" : val == "First Name" ? "first_name" : "last_name";
        if (sortedItem == "none") {
            setUsers([ ...users.data])
        } else {
            let sortedArray = arr.sort((a, b) => {
                console.log(a);
                 var nameA=a[sortedItem].toLowerCase(), nameB=b[sortedItem].toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
    
            setUsers([...sortedArray])
        }
    }

    return (
        <div className="users-list container">
            {
                loading && <div className="spinner-border"></div>
            }
            {
                !loading && users && <h3 className="text-center header">Users</h3>
            }
            
            <div className="text-center">
                {
                    !loading && users && <div>Sort By <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                    <option id="none">None</option>
                    <option id="firstname">First Name</option>
                    <option id="lastname">Last Name</option>
                    </select></div>
                }
                {
                    !loading && user.length > 0 && user.map((item) => {
                        return (
                            <div className="card" style={{'width': '18rem'}} key={item.id} onClick={() => handleOnClick(item.id)}>
                                <img className="card-img-top" src={item.avatar} alt=""/>
                                <div className="card-body">
                                    <p className="card-text">{item.first_name} {item.last_name} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        users: state.user.success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)