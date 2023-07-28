import React from 'react';
import {View} from "react-native";
import {useGetUsersQuery} from "../store/usersApi";
import {useSelector, useDispatch} from "react-redux";
import {saveUsers} from "../store/usersSlice";


const Users = () => {
    const {data} = useGetUsersQuery()
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    dispatch(saveUsers(data))
    // console.log(users)

    return (
        <View>

        </View>
    );
};

export default Users;