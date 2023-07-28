import React from 'react';
import {Button, View} from "react-native";
import {useGetUsersQuery} from "../store/usersApi";
import {useSelector, useDispatch} from "react-redux";
import {saveUsers} from "../store/usersSlice";


const Users = () => {
    const {data} = useGetUsersQuery()
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    // console.log(users)

    return (
        <View>
            <Button title={`asd`} onPress={() => {
                dispatch(saveUsers(data))
            }}/>
        </View>
    );
};

export default Users;