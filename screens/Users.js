import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {deleteUser, saveUsers} from "../store/usersSlice";
import {MyButton, MyContainer, MyInput} from "../styles/styles";
import UserCard from "../components/UserCard";
import NewUserForm from "../components/NewUserForm";
import axios from "axios";


const Users = ({navigation}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    const filteredUsers = users.filter(user => {
        return user.first_name.toLowerCase().includes(search.toLowerCase())
    })

    function getUsers() {
        setIsLoading(true)
        axios
            .get(`https://reqres.in/api/users?delay=1`)
            .then(({data}) => {
                dispatch(saveUsers(data.data))
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(getUsers, [])

    if (isLoading) {
        return <ActivityIndicator size={"large"} style={{alignSelf: 'center', marginTop: 300}}/>
    }

    return (
        <View>
            <MyInput onChangeText={(value) => setSearch(value)} placeholder={'Search by Name'} style={{alignSelf: "center"}}/>
            <FlatList
                data={filteredUsers}
                ListHeaderComponent={<NewUserForm/>}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('User', {
                            name: item.first_name,
                            last_name: item.last_name,
                            email: item.email,
                            avatar: item.avatar
                        })
                    }}>
                        <MyContainer>
                            <UserCard avatar={item.avatar} name={item.first_name}/>
                            <MyButton style={{paddingRight: 15, paddingLeft: 15}} onPress={() => dispatch(deleteUser(item.id))}>
                                <Text
                                    style={{fontSize: 18}}>Delete
                                </Text>
                            </MyButton>
                        </MyContainer>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

export default Users;