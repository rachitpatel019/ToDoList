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
          <Pressable onPress={() => {props.onDone(props.index)}}>
            <Image source={require("../assets/done.png")} />
          </Pressable>
        </View>
      </Pressable>
    </>
  );
};

function List() {
  const { tasks, setTasks, saveData } = useContext(Tasks);

  const handleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveData();
  };

  return (
    <>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {
          tasks.map((task, index) => (
          <Item key={index} index={index} onDone={handleDone} time={task.time} name={task.name} />
          ))
        }
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
