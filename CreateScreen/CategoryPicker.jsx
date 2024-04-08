import { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Picker } from "@react-native-picker/picker";

import palette from "../Config/Colors";

function Calendar() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [category, setCategory] = useState("");

  return (
    <Picker
      style={[styles.picker, { backgroundColor: colors.ViewBackground }]}
      selectedValue={category}
      onValueChange={(itemValue) => setCategory(itemValue)}
      mode="dropdown">
      <Picker.Item
        style={{ color: colors.Text, backgroundColor: colors.ViewBackground }}
        label="School"
      />
      <Picker.Item
        style={{ color: colors.Text, backgroundColor: colors.ViewBackground }}
        label="College"
      />
    </Picker>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  picker: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});
