import { StyleSheet, View, Text, useColorScheme } from "react-native";

import palette from "../Config/Colors";

function StatusBar() {
  let colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: colors.statusBackgroundYellow}]}>
        <Text style={[styles.data, {color: colors.statusTextYellow}]}>2</Text>
        <Text style={[styles.title, {color: colors.statusTextYellow}]}>To do</Text>
      </View>
      <View style={[styles.box, {backgroundColor: colors.statusBackgroundRed}]}>
        <Text style={[styles.data, {color: colors.statusTextRed}]}>0</Text>
        <Text style={[styles.title, {color: colors.statusTextRed}]}>Overdue</Text>
      </View>
      <View style={[styles.box, {backgroundColor: colors.statusBackgroundGreen}]}>
        <Text style={[styles.data, {color: colors.statusTextGreen}]}>1</Text>
        <Text style={[styles.title, {color: colors.statusTextGreen}]}>Finished</Text>
      </View>
    </View>
  );
}

export default StatusBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: '5%',
  },
  box: {
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    width: "30%",
  },
  data: {
    fontSize: 20,
  },
  title: {
    fontSize: 14,
  },
});
