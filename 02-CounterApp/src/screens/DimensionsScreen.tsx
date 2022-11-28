import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export const DimensionsScreen = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  let { width, height } = dimensions.window;
  width = Math.floor(width);
  height = Math.floor(height);


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "red",
  },
  boxPurple: {
    backgroundColor: "#5856D6",
    width: "50%",
    height: "50%",
  },
  boxOrange: {
    backgroundColor: "#F0A23B",
    width: "50%",
    height: "50%",
  },
});
