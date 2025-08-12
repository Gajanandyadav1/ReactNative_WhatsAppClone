import { View, Text, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import imagePath from '@/src/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true) ;
  return (
    <SafeAreaView  style={styles.container}> 
    <View style={styles.header} ></View>
    <View style={styles.body} > 
      <Image source={imagePath.logo} style={styles.myimage} />
      <Text style={styles.whatsapp_text}>WhatsApp</Text>
    </View>
    <View  style={styles.footer}> 

      {
        isLoading ? (
          <> 
          <ActivityIndicator size={moderateScale(50)}   color="#0ccc83" />
          </>
        ) : (
          <>
          <Text style={styles.fromtext}> From   </Text>
      <Text  style={styles.facebooktext}> Facebook </Text>
      </>
        )
      }

      
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
  flex:1, justifyContent:'space-between', alignItems:'center', paddingVertical:moderateScale(60),  
  }, 
  header:{ 
  },  

  body:{ 
    alignItems:'center' ,
    gap:moderateScale(10),
  },

  footer:{
  alignItems:'center'
  }, 
  fromtext:{
    fontSize:12,  
    color:'#867373' 
  },
  facebooktext:{
  fontSize:15,
  }, 
  myimage:{
    width:moderateScale(90), 
    height:moderateScale(90), 
    boxSizing:'border-box'
  },
  whatsapp_text:{
    fontSize:moderateScale(20), 
    fontWeight:'bold', 
    color:'#000000'
  }
})



export default Auth   