import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Alert, ActivityIndicator  } from "react-native";
import React, { useState } from 'react';
import notifee from '@notifee/react-native'
import { ScrollView } from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;



  const singIn = async () => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword( auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error)
      alert('Falha ao Logar: ' + error.message)
    } finally {
      setLoading(false)
    }
  }


  const singUp = async () => {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword( auth, email, password);
      console.log(response);
      alert('email cadastrado')
    } catch (error: any) {
      console.log(error)
      alert('Falha ao se cadastrar: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  async function displayNotifications() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'test',
      name: 'sales',
      vibration: true,
    });


    await notifee.displayNotification({
      id: '7',
      title:' olá',
      body: 'notificação funcionando',
      android: {
        channelId
      }
    });


  }

  return (<KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >

    <View style={styles.BoxLogin}>
      <View style={styles.boxWhite}>
        <ScrollView style={{ width: "100%", padding: 10, }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Text style={styles.title_login}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) =>setEmail(text)}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={(text) =>setPassword(text)}
              secureTextEntry
            />
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
            <TouchableOpacity style={styles.button} onPress={() => singIn()}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => displayNotifications()}><Text style={styles.esqueci} >Esqueci minha senha</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => singUp()}><Text style={styles.esqueci2}>Cadastrar</Text></TouchableOpacity>
            <Text style={styles.versao}>Versao 00.00x</Text>
            </>
              )}
          </View>
        </ScrollView>
      </View>
    </View>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57D7FF'
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5'
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#57D7FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '90%',
    height: 40,
    backgroundColor: '#57D7FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',

  },
  BoxLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 0,
    backgroundColor: '#fff'
  },
  
  boxWhite: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    width: '100%',
    padding: 10,
  },
  title_login: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#57D7FF',
    paddingBottom: 100,
    fontSize: 34,

  },
  esqueci: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#57D7FF',
    padding:10,
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  esqueci2: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#57D7FF',
    padding:10,
    fontSize: 16,

  },
  versao: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B6B6B6',
    paddingTop: 2,
    fontSize: 13,

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B6B6B6',
    paddingTop: 30,

  },
  icon_logo: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B6B6B6',
    alignContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingTop: '25%',
  },
  banner_text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  },
});

export default Login;