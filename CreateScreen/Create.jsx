import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  useColorScheme,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import palette from "../Config/Colors";

function Create() {
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

  const [category, setCategory] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <TextInput
        style={[styles.input, { backgroundColor: colors.ViewBackground }]}
        placeholder="name"
        placeholderTextColor={colors.SecondaryText}
      />
      <Picker
        style={ [styles.picker, {backgroundColor: colors.ViewBackground}] }
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        mode="dropdown">
        <Picker.Item style={{ color: colors.Text, backgroundColor: colors.ViewBackground }} label="School" />
        <Picker.Item style={{ color: colors.Text, backgroundColor: colors.ViewBackground }} label="College" />
      </Picker>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
              ? date.getHours()
              : date.getHours() - 12 + ":" + date.getMinutes()}
          </Text>
          <Pressable
            onPress={showTimepicker}
            style={[styles.button, { backgroundColor: "blue" }]}>
            <Text style={[styles.text, { color: colors.Text }]}>Time</Text>
          </Pressable>
        </View>
        {show && (
          <DateTimePicker value={date} mode={mode} onChange={onChange} />
        )}
      </View>

      <Pressable style={[styles.button, { backgroundColor: "blue" }]}>
        <Text style={[styles.text, { color: colors.Text }]}>Add</Text>
      </Pressable>
    </View>
  );
}

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
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
  picker: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});
