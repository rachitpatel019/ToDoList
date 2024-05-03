import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  useColorScheme,
} from "react-native";

import Tasks from "../Config/Tasks";
import palette from "../Config/Colors";

const Item = (props) => {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <>
      <Pressable
        style={[styles.container, { backgroundColor: colors.ViewBackground }]}>
        <Text
          numberOfLines={1}
          style={[styles.text, { color: colors.Text, width: "26%" }]}>
          {props.time}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.text, { color: colors.Text, width: "60%" }]}>
          {props.name}
        </Text>
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => {
              props.onDone(props.name);
            }}>
            <Image source={require("../assets/done.png")} />
          </Pressable>
        </View>
      </Pressable>
    </>
  );
};

function List(props) {
  const { tasks, setTasks } = useContext(Tasks);

  const handleDone = (name) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.indexOf(name);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const getTodaysTasks = () => {
    const currentDate = new Date();
    const allTasks = [...tasks];

    const newList = allTasks.filter(
      (task) =>
        task.date.split("/")[2] == currentDate.getFullYear() &&
        task.date.split("/")[1] == currentDate.getDate() &&
        task.date.split("/")[0] == currentDate.getMonth() + 1
    );

    return newList;
  };

  const getTasks = () => {
    if (props.selectedCategory == "Today") {
      const taskList = getTodaysTasks();
      return taskList;
    }
    else {
      const allTasks = [...tasks];

      const newList = allTasks.filter(
        (task) => task.category == props.selectedCategory
      );

      return newList;
    }
  };

  return (
    <>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {getTasks().map((task, index) => (
          <Item
            key={index}
            onDone={handleDone}
            time={task.time}
            name={task.name}
          />
        ))}
      </ScrollView>
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  list: {
    marginTop: "5%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "3%",
    padding: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    padding: 5,
  },
  buttonView: {},
});
