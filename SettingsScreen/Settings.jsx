import { StyleSheet, ScrollView, useColorScheme, Appearance } from "react-native";

import Toggle from "./Toggle";
import palette from "../Config/Colors";

function Settings() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  const onDarkModeToggle = () => {
    Appearance.setColorScheme(Appearance.getColorScheme() === "dark" ? "light" : "dark");
  }

  return (
    <ScrollView style={[styles.list, {backgroundColor: colors.Background}]}>
      <Toggle name="Dark mode" onPress={onDarkModeToggle}></Toggle>
    </ScrollView>
  );
}

export default Settings;

export const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
