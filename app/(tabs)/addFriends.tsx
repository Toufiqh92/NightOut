import { StyleSheet, Text, View } from "react-native";

export default function AddFriends() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Friends</Text>
      <Text style={styles.subtitle}>Friends will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
  },
});