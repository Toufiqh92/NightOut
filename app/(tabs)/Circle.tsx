import { StyleSheet, Text, View } from "react-native";

export default function Circle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Circle</Text>
      <Text style={styles.subtitle}>Your friends will appear here</Text>
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