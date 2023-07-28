import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Navigation} from "./screens/Navigation";
import {Provider} from "react-redux";
import {store} from "./store/store";

export default function App() {

    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}

const styles = StyleSheet.create({});
