import { StyleSheet, View } from "react-native";

export const TareaScreenOne = () => {
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
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#5856D6",
    borderColor: "#FFF",
  },
  orangeBox: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#F0A23B",
    borderColor: "#FFF",
  },
  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    backgroundColor: "#28C4D9",
    borderColor: "#FFF",
  }

});
