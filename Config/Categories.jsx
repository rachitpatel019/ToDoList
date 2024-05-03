import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Categories = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(["Today"]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveCategories();
  }, [categories]);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("categories");
      if (jsonValue !== null) {
        setCategories(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  const saveCategories = async () => {
    try {
      await AsyncStorage.setItem("categories", JSON.stringify(categories));
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  const contextValue = {
    categories,
    setCategories,
  };

  return <Categories.Provider value={contextValue}>{children}</Categories.Provider>;
};

export default Categories;
