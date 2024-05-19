import { useContext, useState } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";

import Tasks from "../Config/Tasks";
import palette from "../Config/Colors";

function StatusBar() {
  const { tasks } = useContext(Tasks);
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const now = new Date();

  const getTodaysTasks = () => {
    const allTasks = [...tasks];
    const todaysTasks = allTasks.filter(
      (task) =>
        task.date.split("/")[2] == now.getFullYear() &&
        task.date.split("/")[1] == now.getDate() &&
        task.date.split("/")[0] == now.getMonth() + 1
    );
    return todaysTasks.length;
  };

  const overdueTasks = tasks.filter((task) => {
    const [month, day, year] = task.date.split("/").map(Number);
    const [hours, minutes] = task.time.split(":").map(Number);
    const taskDate = new Date(year, month - 1, day, hours, minutes);
    return taskDate <= now;
  }).length;


  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: colors.statusBackground }]}>
        <Text style={[styles.data, { color: colors.statusText }]}>
          {getTodaysTasks()}
        </Text>
        <Text style={[styles.title, { color: colors.statusText }]}>To do</Text>
      </View>
      <View style={[styles.box, { backgroundColor: colors.statusBackground }]}>
        <Text style={[styles.data, { color: colors.statusText }]}>
          {overdueTasks}
        </Text>
        <Text style={[styles.title, { color: colors.statusText }]}>
          Overdue
        </Text>
      </View>
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
