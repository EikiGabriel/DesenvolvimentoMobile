import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import User, { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';
import Login from './src/pages/Login/Login';
import Home from './src/pages/home/home';
import Carrinho from './src/pages/carrinho/carinho';

const Stack = createNativeStackNavigator();

const DentroStack = createNativeStackNavigator();
 
function DentroLayout() {
  return(
  <DentroStack.Navigator screenOptions={{ headerShown: false }}>
    <DentroStack.Screen name="home" component={Home} />
    <DentroStack.Screen name="carrinho" component={Carrinho} />
  </DentroStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });

    return () => {
      // Limpeza ao desmontar o componente
      unsubscribe();
    };
  }, []);
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
      {user ?  <Stack.Screen name="Dentro" component={DentroLayout} />  :  <Stack.Screen name="Login" component={Login} /> }
    </Stack.Navigator> 
  </NavigationContainer>
  )
}


