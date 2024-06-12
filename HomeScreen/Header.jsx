import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";

import palette from "../Config/Colors";

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
        style={{ position: "absolute", top: "16%", right: "29%" }}
        onPress={props.onAddPress}>
        <Image source={require("../assets/add.png")} />
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
