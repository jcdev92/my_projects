import { StyleSheet, Text, View } from "react-native";

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Box Object Model
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
  },
	title: {
    backgroundColor: "cyan",
    fontSize: 20,
    padding: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
