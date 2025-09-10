import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ButtonComp = ({title, onPress }) =>  {
  return (
   
   <TouchableOpacity style={styles.button_container} activeOpacity={0.7} onPress={onPress}>
    
   
     <Text style={styles.button_text} >   {title}  </Text>
     
     
  </TouchableOpacity>

  )
}

export default ButtonComp

const styles = StyleSheet.create({
    button_container:{
        backgroundColor: '#00a884', 
         padding:13,  
         borderRadius:10, 
         width:'100%'

    },
    button_text:{
        fontSize:moderateScale(14),
        color:'#fff',
        textAlign:'center'
    }
})
