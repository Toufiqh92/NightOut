import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, View, ActivityIndicator, Text } from "react-native";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";

export default function Index() {
  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // 1. Ask for permission
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Location permission denied");
        setLoading(false);
        return;
      }

      // 2. Get current position
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // 3. Put it into a Region object
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      setLoading(false);
    })();
  }, []);

  if (loading || !region) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 8 }}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Map fills screen above buttons, centered on user */}
      <MapView style={{ flex: 1 }} region={region} showsUserLocation />

      {/* Bottom buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderColor: "#e5e5e5",
          backgroundColor: "#fff",
        }}
      >
        <Button title="Home" onPress={() => window.location.reload()} />
        <Button title="Circle" onPress={() => router.push("/Circle")} />
      </View>
    </View>
  );
}