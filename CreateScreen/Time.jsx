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
  const { date, mode, show, onDateChange, showDatepicker, showTimepicker } = props;
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[styles.text, { color: colors.Text, textAlign: "center" }]}>
          {date.getMonth() +
            1 +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear()}
        </Text>
        <Pressable
          onPress={showDatepicker}
          style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={[styles.text, { color: colors.Text }]}>Date</Text>
        </Pressable>
      </View>
      <View>
        <Text
          style={[styles.text, { color: colors.Text, textAlign: "center" }]}>
          {date.getHours() <= 12
            ? date.getHours() +
              ":" +
              (date.getMinutes().toString().length == 2
                ? date.getMinutes()
                : "0" + date.getMinutes())
            : date.getHours() -
              12 +
              ":" +
              (date.getMinutes().toString().length == 2
                ? date.getMinutes()
                : "0" + date.getMinutes())}
        </Text>
        <Pressable
          onPress={showTimepicker}
          style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={[styles.text, { color: colors.Text }]}>Time</Text>
        </Pressable>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          onChange={(event, selectedDate) => onDateChange(selectedDate)}
        />
      )}
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
