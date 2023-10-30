import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () =>{
        auth
            .signOut()
            .then(() =>{
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../assets/bg7.jpg')} resizeMode='cover' style={styles.image} opacity={0.7}>
        <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000000'
    },
    text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center'
    },
    button: {
        backgroundColor: '#afeeee',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    }
})