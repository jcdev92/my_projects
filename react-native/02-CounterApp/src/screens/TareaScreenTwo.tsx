import { StyleSheet, View } from "react-native";

export const TareaScreenTwo = () => {
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
    justifyContent: "center",
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#5856D6",
    borderColor: "#FFF",
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#F0A23B",
    borderColor: "#FFF",
  },
  blueBox: {
    width: "100%",
    height: 100,
    borderWidth: 10,
    backgroundColor: "#28C4D9",
    borderColor: "#FFF",

  }

});
