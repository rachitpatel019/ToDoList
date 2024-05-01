import { useContext } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Categories from "../Config/Categories";
import palette from "../Config/Colors";

function Calendar(props) {
  const { categories } = useContext(Categories);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <Picker
      style={[styles.picker, { backgroundColor: colors.ViewBackground }]}
      selectedValue={props.category}
      onValueChange={props.onChange}
      mode="dropdown">
      <Picker.Item
        style={{ color: colors.Text, backgroundColor: colors.ViewBackground }}
        label="None"
        value="None"
      />
      {categories.map((category) => (
        <Picker.Item
          style={{ color: colors.Text, backgroundColor: colors.ViewBackground }}
          label={category}
          value={category}
        />
      ))}
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
