import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import imagePath from '@/src/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Auth = () => {
  return (
    <SafeAreaView  style={styles.container}> 
    <View  style={styles.header}></View>
    <View  style={styles.body}>


      <Image source={imagePath.logo} style={styles.myimage}/>
    </View>
    <View  style={styles.footer}>

      <Text style={styles.fromtext}>From</Text>
      <Text  style={styles.facebooktext}>facebook</Text>
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
    width:100
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
  }  ,
  myimage:{
    width:moderateScale(90), 
    height:moderateScale(90), 
    boxSizing:'border-box'
  }
})
export default Auth   