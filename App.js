import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Navigation} from "./screens/Navigation";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {StatusBar} from "expo-status-bar";

export default function App() {

    return (
        <Provider store={store}>
            <Navigation/>
            <StatusBar style="auto"/>
        </Provider>
    );
}

const styles = StyleSheet.create({});
