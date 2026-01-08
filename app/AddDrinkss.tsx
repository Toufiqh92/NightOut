import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
export default function AddDrinkss() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const saveDrink = () => {
    if (!name.trim() || !amount.trim()) {
      return Alert.alert("Missing info", "Please enter a drink name and amount");
    }
    Alert.alert("Saved", `Added ${amount} of ${name}`);
    setName("");
    setAmount("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Add a drink entry
        </Text>
        <TextInput 
          value={name}
          onChangeText={setName}
          placeholder="Drink name (e.g., Water)"
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 12,
          }}
        />
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Amount (e.g., 250 ml)"
          keyboardType="numeric"
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 12,
          }}
        />
        <Button title="Save Drink" onPress={saveDrink} />
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
      </View>
    </View>
  );
}
