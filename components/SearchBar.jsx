import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleIconClick = () => {
    setPopupVisible(true);
  };

  const handleSearch = () => {
    setPopupVisible(false);
    // search functionality here
  };

  const handlePopupDismiss = () => {
    setPopupVisible(false);
  };

  return (
    <View className="flex flex-row relative">
      <View className="ml-3 border-2 border-black bg-black rounded-md">
        <TouchableOpacity className="p-1" onPress={handleIconClick}>
          <FontAwesome name="search" size={24} color="white" className="p-2" />
        </TouchableOpacity>
      </View>

      {/* Popup */}
      <Modal visible={isPopupVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={handlePopupDismiss}>
          <View
            className="flex-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></View>
        </TouchableWithoutFeedback>
        <View className="flex flex-row bg-gray-100 p-2 mx-2 rounded-lg border border-black absolute top-16">
          <TextInput
            className="flex-1 h-6 font-normalFont text-black"
            placeholder="Search..."
            placeholderTextColor="#888"
            cursorColor="black"
            returnKeyType="search"
            onChange={() => {}}
          />
          <TouchableOpacity onPress={handleSearch}>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SearchBar;
