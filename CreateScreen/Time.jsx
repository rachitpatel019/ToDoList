import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useColorScheme,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import palette from "../Config/Colors";

function Time(props) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[styles.text, { color: colors.Text, textAlign: "center" }]}>
          {props.date.getMonth() +
            1 +
            "/" +
            props.date.getDate() +
            "/" +
            props.date.getFullYear()}
        </Text>
        <Pressable
          onPress={props.showDatepicker}
          style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={[styles.text, { color: colors.Text }]}>Date</Text>
        </Pressable>
      </View>
      <View>
        <Text
          style={[styles.text, { color: colors.Text, textAlign: "center" }]}>
          {props.date.getHours() <= 12
            ? props.date.getHours() + ":" + props.date.getMinutes()
            : props.date.getHours() - 12 + ":" + props.date.getMinutes()}
        </Text>
        <Pressable
          onPress={props.showTimepicker}
          style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={[styles.text, { color: colors.Text }]}>Time</Text>
        </Pressable>
      </View>
      {props.show && <DateTimePicker
        value={props.date}
        mode={props.mode}
        onChange={(event, selectedDate) => props.onDateChange(selectedDate)}
      />}
    </View>
  );
}

export default Time;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    margin: 5,
    padding: 5,
  },
});
