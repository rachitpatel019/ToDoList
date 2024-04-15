import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tasks = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      if (jsonValue !== null) {
        setTasks(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  const contextValue = {
    tasks,
    setTasks,
    saveData,
  };

  return <Tasks.Provider value={contextValue}>{children}</Tasks.Provider>;
};

export default Tasks;
