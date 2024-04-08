import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  useColorScheme,
} from "react-native";

import CategoryPicker from "./CategoryPicker";
import Time from "./Time";
import Repeat from "./Repeat";
import palette from "../Config/Colors";

function Create() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <TextInput
        style={[styles.input, { backgroundColor: colors.ViewBackground }]}
        placeholder="name"
        placeholderTextColor={colors.SecondaryText}
      />
      
      <CategoryPicker />
      <Time />
      <Repeat />

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
});
