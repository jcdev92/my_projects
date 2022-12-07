import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface  Props {
  title: string,
  onPress: () => void
  position?: 'br' | 'bl'
}

export const Fab = ({ title, onPress, position = "br" }: Props) => {
  return (
      <TouchableOpacity
        style={[styles.fab, position === "bl" ? styles.left : styles.right]}
        onPress={onPress}
      >
        <Text style={[styles.fabText, position === "bl" ? styles.leftColor : styles.rightColor]}>
          {title}
        </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    borderRadius: 100,
    padding: 20,
    margin: 20,
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 0,
    elevation: 5,
  },

  right: {
    backgroundColor: "white",
    right: 0,
  },

  left: {
    backgroundColor: "crimson",
    left: 0,
  },

  fabText: {
    fontSize: 25,
    textAlign: "center",
    position: "relative",
    fontWeight: "bold",
    color: "steelblue",
  },

  rightColor: {
    color: "crimson",
  },

  leftColor: {
    color: "white",
  }


});
