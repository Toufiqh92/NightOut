import { Stack } from "expo-router";
export default function RootLayout() {
  return (
  
  <Stack>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="Circle" options={{ title: "Circle" }} />
    <Stack.Screen name="addFriends" options={{ title: "Add Friends" }} />
  </Stack>

    
  );
}
