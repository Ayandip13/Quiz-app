import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/splash-icon.png")}
        style={{ height: 300, width: 300, marginTop: 20, marginHorizontal: 30 }}
      />
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 30,
          fontWeight: "500",
          marginBottom: 40,
        }}
      >
        Instructions
      </Text>
      <View style={{ backgroundColor: "#693382", height: 0.4, width: "45%", bottom:35 }} />
      <View
        style={{
          backgroundColor: "#693382",
          paddingVertical: 16,
          borderRadius: 6,
          alignItems: "center",
          paddingHorizontal: 20,
          elevation: 8,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", paddingBottom: 10 }}>
          Each Question Has Four Multiple Options
        </Text>
        <Text style={{ fontSize: 18, color: "#fff", paddingBottom: 10 }}>
          Progress Will Be Shown At Top
        </Text>
        <Text style={{ fontSize: 18, color: "#fff" }}>
          Score Would Be Shown At Top
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#693382",
            marginTop: 36,
            borderRadius: 4,
            elevation: 4,
          }}
          onPress={() => navigation.navigate("Question")} //Whenever we register any screen inside the navigator, `navigation` prop always available for every screen to navigate between the screens
        >
          <Text
            style={{
              color: "#fff",
              paddingVertical: 12,
              paddingHorizontal: 36,
              fontSize: 19,
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
