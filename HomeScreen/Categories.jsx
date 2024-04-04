import { StyleSheet, ScrollView, View, Text, Pressable, useColorScheme } from "react-native";

import palette from "../Config/Colors";

const CategoryButton = (props) => {
  let colors = useColorScheme() === 'light' ? palette.light : palette.dark;

  return (
    <>
      <Pressable style={[styles.button, {borderColor: colors.Border}]}>
        <Text style={[styles.text, {color: colors.Text}]}>{props.title}</Text>
      </Pressable>
    </>
  );
};

const AddButton = () => {
  return (
    <>
      <Pressable>
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </>
  );
};

function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <CategoryButton title="Today" />
        <CategoryButton title="Important" />
        <CategoryButton title="College" />
        <CategoryButton title="Work" />
        <CategoryButton title="Home" />
        <CategoryButton title="Other" />
        <AddButton />
      </ScrollView>
    </View>
  );
}

export default Categories;

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
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  addText: {
    fontSize: 48,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
