import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

interface RouterProps{
  navigation: NavigationProp<any, any>
}

export default function Home({ navigation }: RouterProps){
  return(
    <View style={styles.container}>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sair da Conta"/>
      <View style={styles.produtos}>
        <View style={styles.img}>
           
        </View>
        <Text>produtos</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },

  produtos:{
    height:'30%',
    weight:'90%',
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'center',

    backgroundColor: '#f4f4f4'
  },
  img:{
    padding:10,
    backgroundColor: '#111111',
    height:140,
    weight:140,
  }
})