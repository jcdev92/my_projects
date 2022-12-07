import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from "./source/navigator/StackNavigator";
import {DrawerNavigator} from "./source/navigator/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*/}
      <StatusBar style="auto" />
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
