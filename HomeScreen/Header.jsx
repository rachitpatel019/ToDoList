import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";

import palette from "../Config/Colors";

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today =
  days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();

function Header(props) {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.Text }]}>Today's</Text>
      <Text style={[styles.text, { color: colors.Text, fontWeight: "bold" }]}>
        Schedule
      </Text>
      <Text style={[styles.date, { color: colors.Text }]}>{today}</Text>
      <Pressable
        style={{ position: "absolute", top: "16%", right: "17%" }}
        onPress={props.onCalendarPress}>
        <Image source={require("../assets/calendar.png")} />
      </Pressable>
      <Pressable
        style={{ position: "absolute", top: "16%", right: "5%" }}
        onPress={props.onSettingsPress}>
        <Image source={require("../assets/setting.png")} />
      </Pressable>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "5%",
  },
  text: {
    fontSize: 32,
    paddingBottom: "2%",
  },
  date: {
    fontSize: 28,
    paddingTop: "4%",
  },
});
