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
import { StyleSheet, View, Button, FlatList, Pressable } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisbel, setModalIsVisbel] = useState(false);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function startAddGoalHandler() {
    setModalIsVisbel(true);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#cccccc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisbel} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />

        {/* {courseGoals.map((goal) => ( */}

        {/* ))} */}
        {/* </FlatList> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
