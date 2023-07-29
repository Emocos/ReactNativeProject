import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "./LogInScreen";
import Users from "./Users";
import FullUser from "../components/FullUser";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Login'} component={LoginScreen} options={{title: "Login"}}/>
                <Stack.Screen name={'Users'} component={Users} options={{title: "Users"}}/>
                <Stack.Screen name={'User'} component={FullUser} options={{title: "User"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}