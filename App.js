import { View, StyleSheet } from "react-native";
import { FlatList, Button, Text } from "react-native-web";

// question1 (a)
function question1() {
  console.log("function 1");
  const myName = "fahad";
  const arr = ["fahad", "ahmad", "hammad", "danial"];
  for (let index = 0; index < myName.length; index++) {
    let letter = myName[index];
    console.log(letter);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].startsWith(letter)) {
        console.log("name found", arr[i]);
      }
    }
  }
}
// (b)
const names = ["Aider", "Luqman", "Imran"];
//(c)
function checkNameLength(names) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const length = name.length;
    if (length % 2 === 0) {
      const factorial = calculateFactorial(length);
      console.log(
        `The length of '${name}' is even. The factorial of ${length} is ${factorial}.`
      );
    } else {
      const isPrime = isPrimeNumber(length);
      console.log(
        `The length of '${name}' is odd. The number ${length} is ${
          isPrime ? "a prime number" : "not a prime number"
        }.`
      );
    }
  }
}

function calculateFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// checkNameLength(names);
checkNameLength(names);
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <Button title="Call Function" onPress={question1} />
    </View>
  );
}

// question 2
function HomeScreen() {
  return (
    <View style={styles.HomeScreen}>
      <Text style={{ fontSize: 30 }}>Emotion Detection</Text>
      <EmotionStatView name="Fahad" registration="034" />
      <GraprhView name="Fahad" registration="034" />
      <CountryList />
    </View>
  );
}
//child 1
function EmotionStatView({ name, registration }) {
  return (
    <View style={styles.emotionViewStyle}>
      <Text style={styles.titleTextStyle}>Emotion State</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Registration: {registration}</Text>
    </View>
  );
}
//child 1
function GraprhView({ name, registration }) {
  return (
    <View style={styles.graprhViewStyle}>
      <Text style={styles.titleTextStyle}>Graphs Here</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Registration: {registration}</Text>
    </View>
  );
}

// Question 3 registration number 034 ,last didgit even
function CountryList() {
  const myName = "Fahad";
  const fruits = ["figi", "apple", "halwa", "carrot", "dragon fruit"];
  const foundFruits = [];
  for (let index = 0; index < myName.length; index++) {
    let letter = myName[index].toLowerCase();
    for (let i = 0; i < fruits.length; i++) {
      if (fruits[i].toLowerCase().startsWith(letter)) {
        foundFruits.push({ letter: letter.toUpperCase(), country: fruits[i] });
      }
    }
  }

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          {item.letter}: {item.country}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={foundFruits}
      renderItem={RenderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeStyle: {
    flex: 1,
    padding: 10,
  },
  emotionViewStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  graprhViewStyle: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  titleTextStyle: {
    fontWeight: 700,
    fontSize: 24,
    color: "black",
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
});
