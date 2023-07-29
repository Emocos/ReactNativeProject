import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from "react-native";
import {MyButton, MyInput, MyTitle} from "../styles/styles";
import img from '../assets/user.png'
import {useDispatch} from "react-redux";
import {addNewUser} from "../store/usersSlice";

const NewUserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [access, setAccess] = useState(true);
    const dispatch = useDispatch()


    function addUser() {
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
            id: Date.now()
        }
        if (firstName.length && lastName.length && email.length) {
            dispatch(addNewUser(user))
            setAccess(true)
        } else setAccess(false)

    }

    return (
        <View style={{alignItems: 'center'}}>
            <MyTitle>Create User</MyTitle>
            {!access && <Text style={{color: "red"}}>Please fill in all fields!</Text>}
            <MyInput placeholder={'First name'} onChangeText={(value) => setFirstName(value)}/>
            <MyInput placeholder={'Last name'} onChangeText={(value) => setLastName(value)}/>
            <MyInput placeholder={'Email'} onChangeText={(value) => setEmail(value)}/>
            <MyButton style={{width: 150}} onPress={addUser}><Text>Add User</Text></MyButton>
        </View>
    );
};

export default NewUserForm;