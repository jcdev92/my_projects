import { StyleSheet, View } from "react-native";

export const TareaScreenEight = () => {
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
    alignItems: "center",
  },
  purpleBox: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#5856D6",
    borderColor: "#FFF",
  },
  orangeBox: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#F0A23B",
    borderColor: "#FFF",
    left: 100,
  },
  blueBox: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#28C4D9",
    borderColor: "#FFF",
  }

});
