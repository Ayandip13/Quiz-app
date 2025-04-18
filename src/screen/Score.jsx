import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Score = ({ navigation }) => {
  const route = useRoute();

  const { score } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/score.png")}
        style={{ height: 300, width: 300, marginTop: 20, marginHorizontal: 30 }}
      />
      <View style={{backgroundColor:'purple', paddingVertical:15, paddingHorizontal:35, marginTop:100, marginBottom:20, borderRadius:8,}}>
        <Text style={{ fontSize: 17, fontWeight: "600", color:'#fff' }}>
          Congratulations!! You've score {score}
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#693382",
          marginTop: 36,
          borderRadius: 4,
          elevation: 4,
        }}
      >
        <Text
          style={{
            color: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 30,
            fontSize: 16,
          }}
          onPress={() => navigation.navigate("Splash")}
        >
          Play Again
        </Text>
      </Pressable>
    </View>
  );
};

export default Score;
