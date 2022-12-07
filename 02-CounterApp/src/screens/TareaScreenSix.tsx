import { StyleSheet, View } from "react-native";

export const TareaScreenSix = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28425B",
  },
  purpleBox: {
    flex: 1,
    borderWidth: 10,
    backgroundColor: "#5856D6",
    borderColor: "#FFF",
  },
  orangeBox: {
    flex: 1,
    borderWidth: 10,
    backgroundColor: "#F0A23B",
    borderColor: "#FFF",
  },
  blueBox: {
    flex: 2,
    borderWidth: 10,
    backgroundColor: "#28C4D9",
    borderColor: "#FFF",
  }

});
