import { useState, useContext } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";

import Categories from "../Config/Categories";
import Header from "./Header";
import CategoryList from "./CategoryList";
import StatusBar from "./StatusBar";
import List from "./List";
import palette from "../Config/Colors";

function Home({ navigation }) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;
  const { categories } = useContext(Categories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <Header
        onAddPress={() => navigation.navigate("Add Task")}
        onCalendarPress={() => navigation.navigate("Calendar")}
        onSettingsPress={() => navigation.navigate("Settings")}
      />
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onAddPress={() => {
          navigation.navigate("Edit Category");
        }}
      />
      <StatusBar />
      <List selectedCategory={selectedCategory} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
  },
});
