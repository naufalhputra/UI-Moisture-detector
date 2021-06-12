import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'


class Login extends Component {
  

    render() {
        return (
            <View style={styles.container}>
                 

                <Text style={styles.text}>Username</Text>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputContainerText}
                    placeholder="Username"
                
                /> 
                
                </View> 
                <Text style={styles.text}>Password</Text>
                <View style={styles.inputContainer}> 
                <TextInput
                    style={styles.inputContainerText}
                    placeholder="Password"

                /> 
                </View>             
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.props.navigation.navigate('MainMenu')}}><Text style={{color:'#31A05F', fontSize:20, fontWeight:'bold'}}>Log in</Text></TouchableOpacity>
               
            </View>
        )
    }
}


export default Login;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    
    button:{
        padding:20,
    },

    text:{
        color:'white',
        padding:2,
        marginRight : 'auto',
        marginRight : '55%'
    },

    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 17,
        letterSpacing: 1,
        marginBottom: 5,
      },
    
      box: {
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      },
  
    signup:{
        width:'70%',
        fontSize:16,
        borderRadius:10,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        marginTop:2,
        backgroundColor:'#17A351',
        marginBottom:10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
    },
    
    loginBtn:{
      width:'70%',
      backgroundColor:'#F6F6F6',
      borderRadius:10,
      height: 50,
      alignItems: 'center',
      marginBottom:10,
      justifyContent:'center',
      marginTop:250,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
   
    inputContainer:{
        width:'70%',
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        height: 60,
        marginBottom:5,
        opacity: .45
        
        
    },

    inputContainerText:{
        color:'#000000',
        padding:20,
        justifyContent:'center',
        

    },

    container:{
        flex:1,
        backgroundColor:'#31A05F',
        justifyContent: 'center',
        alignItems:'center'
    },
    logoText:{
        fontSize:25,
        fontWeight:'500',
        marginBottom:40,
        color:'white',
        opacity:1.0
    },
    logo:{
        width:250,
        height:250
    },
    logoContainer: {
        alignItems:'center'
    }
  });