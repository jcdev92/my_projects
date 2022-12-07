import {Button, Text, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {styles} from "../theme/appTheme";

interface Props extends StackScreenProps<any, any> {}
export const Page1Screen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Button
                title="Go to Page 2"
                onPress={() => navigation.navigate('Page2')}
            />
            <TouchableOpacity
                style={{marginTop: 10, backgroundColor: 'green', padding: 5}}
                onPress={() => navigation.navigate('Person', {id: 1, name: 'Pedro'})}
            >
                <Text style={{color: 'white', fontSize: 10}}>Pedro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginTop: 10, backgroundColor: 'blue', padding: 5}}
                onPress={() => navigation.navigate('Person', {id: 2, name: 'Maria'})}
            >
                <Text style={{color: 'white', fontSize: 10}}>Maria</Text>
            </TouchableOpacity>
        </View>
    )
}