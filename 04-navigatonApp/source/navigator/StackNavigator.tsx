import {createStackNavigator} from "@react-navigation/stack";
import {Page1Screen} from "../screens/Page1Screen";
import {Page2Screen} from "../screens/Page2Screen";
import {Page3Screen} from "../screens/Page3Screen";
import {PersonScreen} from "../screens/PersonScreen";


export type RootStackParams = {
    Page1: undefined;
    Page2: undefined;
    Page3: undefined;
    Person: {id: number, name: string};
}


export const StackNavigator = () => {
    const Stack = createStackNavigator<RootStackParams>();
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                },
            }}
        >
            <Stack.Screen name="Page1" options={{title: "Page 1"}} component={Page1Screen}/>
            <Stack.Screen name="Page2" options={{title: "Page 2"}} component={Page2Screen}/>
            <Stack.Screen name="Page3" options={{title: "Page 3"}} component={Page3Screen}/>
            <Stack.Screen name="Person" options={{title: "Person"}} component={PersonScreen}/>
        </Stack.Navigator>
    )
}