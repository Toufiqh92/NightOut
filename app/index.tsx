import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Text>Welcome to the Drink Tracker App</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderColor: "#e5e5e5",
        }}
      >
        <Button title="Home" onPress={() => window.location.reload()} />
        <Button title="Add Drinks" onPress={() => router.push("/AddDrinkss")} />
        <Button title="Circle" onPress={() => router.push("/Circle")} />
        <Button title="Add Friends" onPress={() => router.push("/addFriends")} />
      </View>
    </View>

  );
}
