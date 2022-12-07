import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {styles} from "../theme/appTheme";

export const Page2Screen = () => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Button title={"Go to Page 3"} onPress={() => navigator.navigate('Page3')} />
        </View>
    )
}