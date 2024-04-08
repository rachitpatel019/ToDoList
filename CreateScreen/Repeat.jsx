import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useColorScheme,
} from "react-native";

import palette from "../Config/Colors";

const week = [
  { short: "mon", initial: "M" },
  { short: "tue", initial: "T" },
  { short: "wed", initial: "W" },
  { short: "thu", initial: "T" },
  { short: "fri", initial: "F" },
  { short: "sat", initial: "S" },
  { short: "sun", initial: "S" },
];

function Calendar() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [days, setDays] = useState([]);

  return (
    <View>
      <Text style={[styles.text, { color: colors.Text }]}>Repeat:</Text>
      
      <View style={styles.container}>
        {week.map((day) => (
          <Pressable
            style={
              days.includes(day.short)
                ? styles.selectedDays
                : styles.unselectedDays
            }
            onPress={() => {
              days.includes(day.short)
                ? setDays(days.filter((value) => value != day.short))
                : setDays(days.concat(days, [day.short]));
            }}>
            <Text style={[styles.text, { color: colors.Text }]}>
              {day.initial}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  text: {
    fontSize: 20,
    margin: 5,
    padding: 5,
  },
  selectedDays: {
    backgroundColor: "blue",
    borderWidth: 1,
    borderRadius: 100,
    padding: 5,
    margin: 10,
  },
  unselectedDays: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 100,
    padding: 5,
    margin: 10,
  },
});
