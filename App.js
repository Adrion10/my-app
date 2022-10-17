// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text
//           style={styles.dummyText}
//           // style={{
//           //   margin: 16,
//           //   borderWidth: 2,
//           //   borderColor: "red",
//           //   padding: 16,
//           // }}
//         >
//           Hello World from Lace!!!
//         </Text>
//       </View>

//       <Text
//         style={{
//           margin: 16,
//           borderWidth: 2,
//           borderColor: "red",
//           padding: 16,
//         }}
//       >
//         Another piece of text
//       </Text>
//       <StatusBar style="auto" />
//       <Button title="Click Me" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   dummyText: {
//     margin: 10,
//     padding: 10,
//     borderWidth: 4,
//     borderColor: "blue",
//   },
// });

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
  }

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}> {goal} </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    paddingTop: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 5,
    padding: 8,
    color: "white",
  },
  goalText: {
    backgroundColor: "#cccccc",
  },
});
