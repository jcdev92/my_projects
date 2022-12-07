import { StyleSheet, View } from "react-native";

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.greenBox} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 350,
    height: 400,
    backgroundColor: "#28C4D9",
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: "#F0A23B",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
  },
  greenBox: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
  },

});
