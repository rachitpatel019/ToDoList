import { useState } from "react";
import { View, Text, StyleSheet, Switch, Appearance, useColorScheme } from "react-native";

import palette from "../Config/Colors";

function Toggle(props) {
  let colors = useColorScheme() === 'light' ? palette.light : palette.dark;
  const [isEnabled, setIsEnabled] = useState(Appearance.getColorScheme() === "light" ? false : true);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    Appearance.setColorScheme(Appearance.getColorScheme() === "dark" ? "light" : "dark");
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.ViewBackground}]}>
      <Text style={[styles.text, {color: colors.Text}]}>{props.name}</Text>
      <Switch
        trackColor={{ false: 'lightgray', true: 'blue' }}
        thumbColor="white"
        onValueChange={toggleSwitch}
        value={isEnabled} />
    </View>
  );
};

export default Toggle;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
    padding: "3%",
    paddingTop: "2%",
    paddingBottom: "2%",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
});
