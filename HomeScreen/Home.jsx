import { View, StyleSheet, useColorScheme } from "react-native";
import Header from "./Header";
import Categories from "./Categories";
import StatusBar from "./StatusBar";
import List from "./List";
import AddTask from "./AddTask";
import palette from "../Config/Colors";

function Home({ navigation }) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={[styles.container, {backgroundColor: colors.Background}]}>
      <Header
        onCalendarPress={() => navigation.navigate("Calendar")}
        onSettingsPress={() => navigation.navigate("Settings")}
      />
      <Categories />
      <StatusBar />
      <List />
      <AddTask onPress={() => navigation.navigate("Add Task")} />
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
