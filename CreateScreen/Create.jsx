import { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  useColorScheme,
} from "react-native";

import Tasks from "../Config/Tasks";
import CategoryPicker from "./CategoryPicker";
import Time from "./Time";
import Repeat from "./Repeat";
import palette from "../Config/Colors";

function Create() {
  const { tasks, setTasks, saveData } = useContext(Tasks);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("School");
  const [days, setDays] = useState([]);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onCategoryChange = (itemValue, itemIndex) => {
    setCategory(itemValue);
  };

  const onDaysChange = (day) => {
    const updatedDays = days.includes(day)
      ? days.filter((value) => value !== day)
      : [...days, day];
    setDays(updatedDays);
  };

  const onDateChange = (selectedDate) => {
    setShow(false);
    setDate(selectedDate);
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

  const handleAdd = () => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time =
      hours <= 12
        ? hours +
          ":" +
          (minutes.toString().length == 2 ? minutes : "0" + minutes)
        : hours -
          12 +
          ":" +
          (minutes.toString().length == 2 ? minutes : "0" + minutes);
    const newTask = {
      name: title,
      category: category,
      date: date,
      time: time,
      repeat: days,
    };
    setTasks([...tasks, newTask]);
    saveData();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: colors.ViewBackground, color: colors.Text },
        ]}
        placeholder="name"
        placeholderTextColor={colors.SecondaryText}
        onChangeText={setTitle}
      />

      <CategoryPicker category={category} onChange={onCategoryChange} />
      <Time
        date={date}
        mode={mode}
        show={show}
        onDateChange={onDateChange}
        showDatepicker={showDatepicker}
        showTimepicker={showTimepicker}
      />
      <Repeat days={days} onChange={onDaysChange} />

      <Pressable
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={handleAdd}>
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
});
