import { useState } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import Header from "./Header";
import Categories from "./Categories";
import StatusBar from "./StatusBar";
import List from "./List";

import palette from "../Config/Colors";

function Home({ navigation }) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;
  const [category, setCategory] = useState("");

  return (
    <View style={[styles.container, {backgroundColor: colors.Background}]}>
      <Header
        onAddPress={() => navigation.navigate("Add Task")}
        onCalendarPress={() => navigation.navigate("Calendar")}
        onSettingsPress={() => navigation.navigate("Settings")}
      />
      <Categories selected={category} setSelected={setCategory} onAddPress={() => {navigation.navigate("Add Category")}} />
      <StatusBar />
      <List category={category} setCategory={setCategory} />
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
