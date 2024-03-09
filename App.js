import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Motor from './components/Motor';
import Bicycle from './components/Bicycle';


export default function App() {
  return (
    <View style={styles.container}>
      <Car/>
      <Motor/>
      <Bicycle/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5EE ',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
