import { useState, useContext } from "react";
import { View, StyleSheet, Text, Pressable, TextInput, useColorScheme, ScrollView } from "react-native";

import Categories from "../Config/Categories";
import palette from "../Config/Colors";

function CategoryScreen() {
  const { categories, setCategories } = useContext(Categories);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [newCategory, setNewCategory] = useState("");

  const handleAdd = () => {
    setCategories([...categories, newCategory]);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <TextInput
        style={[styles.input, {backgroundColor: colors.ViewBackground}]}
        placeholder="name"
        placeholderTextColor={colors.SecondaryText}
        onChangeText={setNewCategory}
        >
      </TextInput>
      <Pressable style={[styles.button, {backgroundColor: "blue"}]} onPress={handleAdd}>
        <Text style={[styles.text, {color: colors.Text}]}>Add</Text>
      </Pressable>
      <ScrollView />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 10,
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    color: "white",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
