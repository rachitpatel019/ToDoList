import { useState } from "react";
import { View, StyleSheet, Text, Pressable, useColorScheme } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import palette from "../Config/Colors";

function Calendar() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

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
            ? date.getHours() + ":" + date.getMinutes()
            : date.getHours() - 12 + ":" + date.getMinutes()}
        </Text>
        <Pressable
          onPress={showTimepicker}
          style={[styles.button, { backgroundColor: "blue" }]}>
          <Text style={[styles.text, { color: colors.Text }]}>Time</Text>
        </Pressable>
      </View>
      {show && <DateTimePicker value={date} mode={mode} onChange={onChange} />}
    </View>
  );
}

export default Calendar;

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
