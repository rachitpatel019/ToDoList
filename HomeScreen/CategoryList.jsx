import { useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, Pressable, Image, useColorScheme } from "react-native";

import Categories from "../Config/Categories";
import palette from "../Config/Colors";

const CategoryButton = (props) => {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <>
      <Pressable
        style={[
          styles.button,
          props.selected
            ? { borderColor: "blue" }
            : { borderColor: colors.Border },
        ]}
        onPress={props.onPress}>
        <Text style={[styles.text, { color: colors.Text }]}>{props.title}</Text>
      </Pressable>
    </>
  );
};

const AddButton = (props) => {
  return (
    <>
      <Pressable style={styles.addButton} onPress={props.onAddPress}>
        <Image source={useColorScheme() === "light" ? require("../assets/pencil_black.png") : require("../assets/pencil_white.png")} />
      </Pressable>
    </>
  );
};

function CategoryList(props) {
  const { categories } = useContext(Categories);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {categories.map((category, index) => (
          <CategoryButton
            title={category}
            key={index}
            selected={category == props.selectedCategory}
            onPress={() => props.setSelectedCategory(category)}
          />
        ))}
        <AddButton onAddPress={props.onAddPress} />
      </ScrollView>
    </View>
  );
}

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "10%",
    marginLeft: "3%",
    marginRight: "5%",
  },
  list: {},

  button: {
    padding: 5,
    margin: 5,
    borderWidth: 3,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },

  addButton: {
    padding: 5,
    margin: 5,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
  },
});
