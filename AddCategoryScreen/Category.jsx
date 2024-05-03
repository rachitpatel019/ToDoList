import { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  useColorScheme,
  ScrollView,
  Image,
} from "react-native";

import Categories from "../Config/Categories";
import palette from "../Config/Colors";

const Item = (props) => {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;
  const colorScheme = useColorScheme();

  return (
    <>
      {props.name != "Today" && <View style={styles.list}>
        <Text style={[styles.text, { color: colors.Text }]}>{props.name}</Text>
        <Pressable
          onPress={() => {
            props.onDelete(props.index);
          }}>
          <Image
            source={
              colorScheme === "light"
                ? require("../assets/close_black.png")
                : require("../assets/close_white.png")
            }
          />
        </Pressable>
      </View>}
    </>
  );
};

function CategoryScreen() {
  const { categories, setCategories } = useContext(Categories);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const [newCategory, setNewCategory] = useState("");

  const handleAdd = () => {
    setCategories([...categories, newCategory]);
  };

  const handleDelete = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <TextInput
        style={[styles.input, { backgroundColor: colors.ViewBackground }]}
        placeholder="name"
        placeholderTextColor={colors.SecondaryText}
        onChangeText={setNewCategory}></TextInput>
      <Pressable
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={handleAdd}>
        <Text style={[styles.text, { color: colors.Text }]}>Add</Text>
      </Pressable>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}>
        {categories.map((category, index) => (
          <Item name={category} key={index} index={index} onDelete={handleDelete} />
        ))}
      </ScrollView>
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
    marginBottom: "20%",
  },
  text: {
    fontSize: 20,
  },

  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    margin: "2%",
    padding: 15,
  },
});
