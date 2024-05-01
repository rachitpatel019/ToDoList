import { useContext, useState } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";

import Tasks from "../Config/Tasks";
import palette from "../Config/Colors";

function StatusBar() {
  const { tasks, setTasks, saveTasks } = useContext(Tasks);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: colors.statusBackground }]}>
        <Text style={[styles.data, { color: colors.statusText }]}>
          {tasks.length}
        </Text>
        <Text style={[styles.title, { color: colors.statusText }]}>To do</Text>
      </View>
      <View style={[styles.box, { backgroundColor: colors.statusBackground }]}>
        <Text style={[styles.data, { color: colors.statusText }]}>0</Text>
        <Text style={[styles.title, { color: colors.statusText }]}>
          Overdue
        </Text>
      </View>
      {/* <View style={[styles.box, {backgroundColor: colors.statusBackgroundGreen}]}>
        <Text style={[styles.data, {color: colors.statusTextGreen}]}>1</Text>
        <Text style={[styles.title, {color: colors.statusTextGreen}]}>Finished</Text>
      </View> */}
    </View>
  );
}

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
  },
  box: {
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    width: "45%",
  },
  data: {
    fontSize: 20,
  },
  title: {
    fontSize: 14,
  },
});
