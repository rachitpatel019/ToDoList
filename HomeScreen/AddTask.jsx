import { StyleSheet, Text, View, Pressable } from "react-native";

function AddTask(props) {
  return (
    <Pressable
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "black",
    borderWidth: 0,
    borderRadius: 100,
    paddingLeft: 27.5,
    paddingRight: 27.5,
    paddingBottom: 9,
  },
  text: {
    fontSize: 64,
    verticalAlign: "middle",
    color: "white",
  },
});
