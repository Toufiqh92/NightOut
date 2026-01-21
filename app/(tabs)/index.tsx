import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import PulseMarker from "../../components/PulseMarker";

export default function Index() {
  // State for storing the user's current map region
  const [region, setRegion] = useState<Region | null>(null);
  // State for tracking loading status while fetching location
  const [loading, setLoading] = useState(true);
  // State for storing user's current coordinates
  const [userCoords, setUserCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  /**
   * Initialize user location on component mount
   * - Requests location permissions from the user
   * - Retrieves current position coordinates
   * - Sets up the map region centered on user location
   */
  useEffect(() => {
    (async () => {
      // Request permission to access foreground location services
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Location permission denied");
        setLoading(false);
        return;
      }

      // Fetch current device position with balanced accuracy
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // Store user coordinates for passing to pulse marker
      const userLocation = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };
      setUserCoords(userLocation);

      // Create map region centered on user location with zoom level
      setRegion({
        ...userLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      setLoading(false);
    })();
  }, []);

  // Show loading indicator while fetching location
  if (loading || !region || !userCoords) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B6B" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        pitchEnabled={false}
        rotateEnabled={true}
        scrollEnabled={true}
        zoomEnabled={true}
      >
        {/* Render pulse marker at user's actual location */}
        <PulseMarker coordinate={userCoords} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
  },
});