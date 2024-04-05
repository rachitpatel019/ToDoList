import { View, StyleSheet, useColorScheme } from "react-native";
import Header from "./Header";
import Categories from "./Categories";
import StatusBar from "./StatusBar";
import List from "./List";

import palette from "../Config/Colors";

function Home({ navigation }) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={[styles.container, {backgroundColor: colors.Background}]}>
      <Header
        onAddPress={() => navigation.navigate("Add Task")}
        onCalendarPress={() => navigation.navigate("Calendar")}
        onSettingsPress={() => navigation.navigate("Settings")}
      />
      <Categories onAddPress={() => {navigation.navigate("Add Category")}} />
      <StatusBar />
      <List />
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
