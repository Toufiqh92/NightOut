import { router } from "expo-router";
import { Button, Text, View } from "react-native";

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
      <Text></Text>
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
        <Button title="Circle" onPress={() => router.push("/Circle")} />
      </View>
    </View>

  );
}
