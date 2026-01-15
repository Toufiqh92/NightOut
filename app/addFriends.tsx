import { View, Text } from "react-native";
import { Button } from "react-native";
import { router } from "expo-router";
export default function addFriends() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Add Friends</Text>
            <Button title="Home" onPress={() => window.location.reload()} />
            <Button title="Add Friends" onPress={() => router.push("/addFriends")} />
            <Button title="Circle" onPress={() => router.push("/Circle")} />
        </View>
    )
}