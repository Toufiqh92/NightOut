import * as Location from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
export default function Index() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // Request permission
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== "granted") {
          console.log("Location permission denied");
          return;
        }
        
        // Get current location
        const locationData = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        
        // Store it in state
        setLocation(locationData);
      } catch (error) {
        console.error("Error getting location:", error);
      }
    })();
  }, []);

  return (
    <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: location?.coords.latitude || 0,
      longitude: location?.coords.longitude || 0,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
  >
  </MapView>
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
