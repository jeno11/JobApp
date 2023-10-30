import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  ImageBackground, 
  SafeAreaView } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ImageBackground 
        source={require('../assets/bg7.jpg')} 
        //resizeMode='stretch' 
        style={styles.image} 
        opacity={0.7}
      >
        <View style={styles.top}>
          <Icon name='menu' size={30} color='#a2a2db' style={{ width: 20 }}/>
          <Icon name='account-circle' size={33} color='#a2a2db' style={{ marginLeft: 270 }}/>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20}}>
          <Text style={styles.text}> Welcome </Text>
        </View>
        {/* <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      //justifyContent: 'center',
      backgroundColor: '#000000'
    },
    text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 40,
    fontFamily: 'BreeSerif-Regular'
    },
    top: {
      flexDirection: 'row',
      marginTop: 50,
      //marginBottom: 680,
      //alignItems: 'center',
      paddingHorizontal: 20
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