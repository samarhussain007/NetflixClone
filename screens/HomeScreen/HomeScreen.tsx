import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import categories from "../../assets/data/categories";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeCategory from "../../components/HomeCategory";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  // console.log(catre);
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
