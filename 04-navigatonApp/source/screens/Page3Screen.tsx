import {Button, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {styles} from "../theme/appTheme";
interface Props  extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page3 Screen</Text>
            <Button title={"Back"} onPress={() => navigation.pop()} />
            <Button title={"Back to Page 1"} onPress={() => navigation.popToTop()} />
        </View>
    )
}