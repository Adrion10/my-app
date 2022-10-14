import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ margin: 16, borderWidth: 2, borderColor: "red" }}>
          Hello World from Lace!!!
        </Text>
      </View>

      <Text>Another piece of text</Text>
      <StatusBar style="auto" />
      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
