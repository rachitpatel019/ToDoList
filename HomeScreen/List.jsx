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
          {parseInt(props.time.split(":")[0]) <= 12
            ? props.time
            : parseInt((props.time.split(":")[0]) - 12) + ":" + (props.time.split(":")[1])}
        </Text>
        <Text
          numberOfLines={1}
          style={[styles.text, { color: colors.Text, width: "60%" }]}>
          {props.name}
        </Text>
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => {
              props.onDone(props.task);
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

  const handleDone = (task) => {
    let updatedTasks = [...tasks];
    const index = updatedTasks.indexOf(task);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const compareTime = (a, b) => {
    const time1 = a.time.split(":");
    const time2 = b.time.split(":");

    const hour1 = parseInt(time1[0], 10);
    const minute1 = parseInt(time1[1], 10);

    const hour2 = parseInt(time2[0], 10);
    const minute2 = parseInt(time2[1], 10);

    if (hour1 !== hour2)
    {
      return hour1 - hour2;
    }
    else
    {
      return minute1 - minute2;
    }
  }

  const getTodaysTasks = () => {
    const currentDate = new Date();
    const allTasks = [...tasks];

    const todaysTasks = allTasks.filter(
      (task) =>
        task.date.split("/")[2] == currentDate.getFullYear() &&
        task.date.split("/")[1] == currentDate.getDate() &&
        task.date.split("/")[0] == currentDate.getMonth() + 1
    );

    const sortedTasks = todaysTasks.sort(compareTime);
    return sortedTasks;
  };


  const getTasks = () => {
    if (props.selectedCategory == "Today") {
      const taskList = getTodaysTasks();
      return taskList;
    }
    else {
      const allTasks = [...tasks];

      const categoryTasks = allTasks.filter(
        (task) => task.category == props.selectedCategory
      );

      const sortedTasks = categoryTasks.sort(compareTime);
      return sortedTasks;
    }
  };

  return (
    <>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {getTasks().map((task, index) => (
          <Item
            task={task}
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
