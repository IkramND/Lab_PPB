import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";


export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator()

  return (
    
    <NavigationContainer>

      <Tab.NavigatorContainer>

        <Tab.Screen name="page1" component={page1}/>
        <Tab.Screen name="page2" component={page2}/>

      </Tab.NavigatorContainer>
{/* <Stack.Navigator>
  <Stack.Screen name="page1" component={page1} options={{ title: "Welcome" }}/>
  <Stack.Screen  name="page2" component={page2}/>

  
</Stack.Navigator> */}
    </NavigationContainer>
  );
}

// const page1 = ({navigation}) => {
const page1 = () => {

  return<Text>page 1</Text>;
  // return (
  //   <TouchableOpacity onPress={() => navigation.navigate("page2",{name:"Gymnastiar"})}>
  //     <View style={{ backgroundColor : "purple",padding:10,borderRadius:10, margin:10}}>

  //       <Text style = {{color : "white", textAlign:"center"}}>Click here to see me</Text>
  //     </View>

  //   </TouchableOpacity>
  // );
};


const page2= () => {
  return<Text>page 2</Text>;
};
// const page2 = ({ route }) => {
//   retu
//   // return <Text>This is {route.params.name}</Text>
// };