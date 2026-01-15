import { View, Text } from "react-native";
import { Button } from "react-native";
import { router } from "expo-router";
export default function Circle() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Circle This is where you can add your friends while you are out</Text>
            <Button title="Home" onPress={() => window.location.reload()} />
            <Button title="Add Friends" onPress={() => router.push("/addFriends")} />
        </View>
    )
}