import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Zadaj Úlohu ...'/>
      <Button title="ADD"/>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.text}>UDALOSTI .:::::</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: { 
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    paddingHorizontal: 10,

  },
  taskContainer: {flex: 3, borderTopWidth: 3, margin: 20, 
  },
  text: {padding: 20},
  input: {borderWidth: 3, width: "80%", borderRadius: 8}
});