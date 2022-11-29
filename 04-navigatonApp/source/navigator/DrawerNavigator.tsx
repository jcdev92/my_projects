import { createDrawerNavigator } from '@react-navigation/drawer';
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screens/SettingsScreen";
import {useWindowDimensions} from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    const {} = useWindowDimensions()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}