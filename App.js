import {
  StyleSheet,
  useColorScheme,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { TasksProvider } from "./Config/Tasks";
import Home from "./HomeScreen/Home";
import Create from "./CreateScreen/Create";
import Category from "./AddCategoryScreen/Category";
import Calendar from "./CalendarScreen/Calendar";
import Settings from "./SettingsScreen/Settings";
import palette from "./Config/Colors";

const Stack = createNativeStackNavigator();

// StatusBar.setHidden(true);

export default function App() {
  const colors = useColorScheme() === "light" ? palette.light : palette.dark;

  return (
    <TasksProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Screen"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add Task"
            component={Create}
            options={{
              headerStyle: { backgroundColor: colors.Background },
              headerTitleStyle: { color: colors.Text },
              headerTintColor: colors.Text,
            }}
          />
          <Stack.Screen
            name="Add Category"
            component={Category}
            options={{
              headerStyle: { backgroundColor: colors.Background },
              headerTitleStyle: { color: colors.Text },
              headerTintColor: colors.Text,
            }}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={{
              headerStyle: { backgroundColor: colors.Background },
              headerTitleStyle: { color: colors.Text },
              headerTintColor: colors.Text,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerStyle: { backgroundColor: colors.Background },
              headerTitleStyle: { color: colors.Text },
              headerTintColor: colors.Text,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#cfe2f3",
  },
});
