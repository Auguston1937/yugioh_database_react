import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Decks, Search, Deck , Detalhe } from './views/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
        <Stack.Screen name="Decks" component={Decks} options={{headerShown:false}}/>
        <Stack.Screen name="Deck" component={Deck} options={{headerShown:false}}/>
        <Stack.Screen name="Detalhe" component={Detalhe} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


