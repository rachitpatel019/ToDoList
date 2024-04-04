import { StyleSheet, ScrollView, useColorScheme } from "react-native";

import Toggle from "./Toggle";
import palette from "../Config/Colors";

function Settings() {
  let colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <ScrollView style={[styles.list, {backgroundColor: colors.Background}]}>
      <Toggle name="Dark mode"></Toggle>
    </ScrollView>
  );
}

export default Settings;

export const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
