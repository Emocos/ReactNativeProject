import React from 'react';
import {MyAvatar, MyTitle} from "../styles/styles";
import {View} from "react-native";

const FullUser = ({route}) => {

    const {id, name, last_name, email, avatar} = route.params;

    return (
        <View style={{alignItems: 'center', marginTop: 150}}>
            <MyAvatar
                source={{uri: avatar}}
            />

            <MyTitle>Email: {email}</MyTitle>
            <MyTitle>Full name: {name} {last_name}</MyTitle>
        </View>
    );
};

export default FullUser;