import { StyleSheet, Text, View } from "react-native";

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text><Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text><Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text><Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text><Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text><Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28C4D9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  boxOne: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
  },
  boxTwo: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
  },
  boxThree: {
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
  }
});
