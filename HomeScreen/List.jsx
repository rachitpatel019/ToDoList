import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  useColorScheme,
} from "react-native";

import palette from "../Config/Colors";

const Item = () => {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <>
      <Pressable style={[styles.container, {backgroundColor: colors.ViewBackground}]}>
        <Text numberOfLines={1} style={[styles.text, { color: colors.Text, width: '30%' }]}>
          12:00 AM
        </Text>
        <Text numberOfLines={1} style={[styles.text, { color: colors.Text, width: '50%' }]}>
          Make Breakfast in the Morning
        </Text>
        <View style={styles.buttonView}>
          <Pressable>
            <Image
              source={require("../assets/done.png")}
            />
          </Pressable>
        </View>
      </Pressable>
    </>
  );
};

function List() {
  return (
    <>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
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
    backgroundColor: 'white',
    marginTop: '3%',
    padding: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
  buttonView: {},
});
