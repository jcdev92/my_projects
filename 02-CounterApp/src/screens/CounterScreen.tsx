import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Fab } from "../components/Fab";

export const CounterScreen = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.counterContainer}
        >
          <Text style={styles.counterText}>Counter {counter}
          </Text>

          <Fab
            title="+1"
            onPress={() => setCounter(counter + 1)}
          />

          <Fab
          title="-1"
          position={"bl"}
          onPress={() => setCounter(counter - 1)}
          />

        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFAFA",
  },

  counterContainer: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "steelblue",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },

  counterText: {
    fontSize: 40,
    textAlign: "center",
    position: "relative",
  },

});
