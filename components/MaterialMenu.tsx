import { View, Text } from "react-native";
import React from "react";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

interface HelpMenuProps {
  onClose: () => void;
}

const HelpMenu: React.FC<HelpMenuProps> = ({ onClose }) => {
  const closeMenu = () => {
    onClose();
  };

  return (
    <View style={{ width: 240, height: 400, backgroundColor: "#191919" }}>
      <View
        style={{
          width: 240,
          alignItems: "flex-end",
          paddingRight: 5,
          paddingTop: 5,
        }}
      >
        <TouchableOpacity onPress={closeMenu}>
          <MaterialCommunityIcons name="close-circle" size={38} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 240,
          height: 160,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
          }}
        >
          Help
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
          }}
        >
          If you encounter issues or have suggestions for improvements, feel
          free to hit a Logo and reach out to us:
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity>
          <Foundation name="social-facebook" size={55} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation name="social-linkedin" size={55} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation name="social-github" size={55} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ width: 240, paddingTop: 50, alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 18,
          }}
        >
          Thanks for your feedback! 🚀
        </Text>
      </View>
    </View>
  );
};

export default HelpMenu;
