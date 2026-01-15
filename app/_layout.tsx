import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "Red" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // You can add icons here using tabBarIcon
        }}
      />
      <Tabs.Screen
        name="addFriends"
        options={{
          title: "Add Friends",
        }}
      />
      <Tabs.Screen
        name="circle"
        options={{
          title: "Circle",
        }}
      />
    </Tabs>
  );
}
