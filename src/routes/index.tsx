import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather , Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';


import Home from "../pages/home/home";
import Login from "../pages/Login/Login";
import Carinho from "../pages/carrinho/carinho";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",
                tabBarStyle:{
                    backgroundColor: "#FFF",
                    borderTopWidth: 0
                }
            }}
            >
                <Tab.Screen name='LoginTab' component={Login} 
                options={{ tabBarIcon:({color,size,focused}) =>{
                    if(focused){
                        return <FontAwesome name="user" size={size} color="#000" />
                    }
                    return <Feather name="user" size={size} color={color} />
                } }}/>

                <Tab.Screen name='HomeTab' component={Home}
                options={{ tabBarIcon:({color,size,focused}) =>{
                    if(focused){
                        return <Ionicons name="home" color="#000" size={size}/>
                    }
                    return <Ionicons name="home-outline" color={color} size={size}/>
                } }}/>
                <Tab.Screen name='CarinhoTab' component={Carinho}options={{ tabBarIcon:({color,size,focused}) =>{
                    if(focused){
                        return <Entypo name="shopping-cart" size={size} color="#000" />
                    }
                    return <AntDesign name="shoppingcart" size={size} color={color} />
                } }}/>
            </Tab.Navigator>
        </Stack.Navigator>
    )
}