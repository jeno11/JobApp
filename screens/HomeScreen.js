import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView, 
  ImageBackground, 
  SafeAreaView, 
  Button} from 'react-native'
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
        <TouchableOpacity style={styles.top}> 
          <Icon name='account-circle' size={33} color='#00008b' style={{ width: 35 }} />
          <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign out</Text> 
          </TouchableOpacity> 
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: 20}}>
          <Text style={styles.text}> Welcome </Text>
        </View>
        {/* <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          
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
    color: '#000080',
    fontWeight: '400',
    fontSize: 40,
    fontFamily: 'Roboto'
    },
    top: {
      flexDirection: 'row',
      marginTop: 50,
      //marginBottom: 680,
      //alignItems: 'center',
      paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#000080',
        width: '25%',
        height: '80%',
        marginLeft: 205,
        marginTop: 5,
        //marginEnd: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#808080',
        fontWeight: '700',
        fontSize: 16,
        //alignItems: 'center',
        //alignContent: 'center',
        textAlign: 'center'
    }
})