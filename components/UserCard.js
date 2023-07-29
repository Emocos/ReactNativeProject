import React from 'react';
import {View} from "react-native";
import {MyAvatar, MyTitle} from "../styles/styles";

const UserCard = ({name, last_name, avatar, email}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <MyAvatar
                source={{uri: avatar}}
            />
            <MyTitle>{name} {last_name}</MyTitle>
        </View>
    );
};

export default UserCard;