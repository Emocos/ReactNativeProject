import {Text, View} from 'react-native';
import {useState} from "react";
import axios from "axios";
import {MyButton, MyInput, MyTitle} from "../styles/styles";


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [access, setAccess] = useState(false);
    const login = async () => {
        setAccess(false)
        await axios.post(`https://reqres.in/api/login`, {
            email: email,
            password: password
        })
            .then((response) => {
                if (response) navigation.navigate(`Users`)
            })
            .catch((error) => {
                setAccess(true)
            })

    }

    return (
        <View style={{alignItems: 'center', paddingTop: 150}}>
            <MyTitle>SignIn</MyTitle>
            {access &&
                <MyTitle style={{color: 'red', fontSize: 18, alignSelf: 'center'}}>Invalid login or password!</MyTitle>}

            <MyInput
                placeholder={'example@email.com'}
                value={email}
                onChange={(value) => setEmail(value)}
            />
            <MyInput
                secureTextEntry={true}
                placeholder={'Password'}
                value={password}
                onChange={(value) => setPassword(value)}
            />
            <MyButton onPress={login} style={{paddingRight: 15, paddingLeft: 15}}><Text style={{fontSize: 18}}>Login</Text></MyButton>
        </View>
    );
}
