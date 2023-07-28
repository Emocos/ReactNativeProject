import React, {useEffect} from 'react';
import {FlatList, Text, View} from "react-native";
import {useGetUsersQuery} from "../store/usersApi";
import {useSelector, useDispatch} from "react-redux";
import {saveUsers} from "../store/usersSlice";


const Users = () => {
    const dispatch = useDispatch()
    const {data} = useGetUsersQuery();
    const users = useSelector(state => state.users.users)

    if (data) console.log(data.data)
    useEffect(() => {
        if (data) dispatch(saveUsers(data.data))
    }, [])

    return (
        <View>
           <FlatList data={users} renderItem={({user}) =>

           }
        </View>
    );
};

export default Users;