import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./LogInScreen";
import Users from "./Users";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Login'} component={Users} options={{title: "Login"}}/>
                {/*<Stack.Screen name={'Users'} component={Users} options={{title: "Users"}}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}