import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screens/SettingsScreen";
import {Image, Text, useWindowDimensions, View} from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    const {width} = useWindowDimensions()
    const isLargeScreen = width >= 768;

    return (
        <Drawer.Navigator
            screenOptions={
                {
                    drawerType: isLargeScreen ? 'permanent' : 'front',
                }
            }
            drawerContent={(props) => <SideMenu {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator}/>
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
        </Drawer.Navigator>
    );
}


const SideMenu = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View>
                <Image source={
                    {
                        uri: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                    }
                }
                       style={{
                           width: 80,
                           height: 80,
                           borderRadius: 40,
                           borderWidth: 2,
                           borderColor: 'white',
                           marginTop: 20,
                           marginLeft: 20,
                       }}
                />
            </View>
        </DrawerContentScrollView>
    )
}