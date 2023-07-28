import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useRef} from "react";
import axios from "axios";

export default function LoginScreen() {
    const email = useRef();
    const password = useRef()
    const login = async () => {
        await axios.post(`https://reqres.in/api/login`, {
            email: email.current.value,
            password: password.current.value
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error.response.data.error))
    }


    return (
        <View style={styles.container}>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', backgroundColor: 'white', width: 250, height: 35}}
                       ref={email}/>
            <TextInput style={{borderStyle: 'solid', borderWidth: 1, borderColor: 'black', backgroundColor: 'white', width: 250, height: 35}}
                       secureTextEntry={true}
                       ref={password}/>
            <Button title={`test`} onPress={login}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
});
