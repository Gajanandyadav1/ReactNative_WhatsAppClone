import ButtonComp from '@/src/component/atoms/ButtonComp';
import imagePath from '@/src/constants/imagePath';
import { router } from 'expo-router';
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const terms_agree = () => {

  const onAgree= ()=>{
     
    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.whatsappText}>Welcome to Whatsapp</Text>
         <Image source={imagePath.welcome}  style={styles.images} resizeMode='contain'/>

         <View>
          <Text style={styles.description_text}>Read our <Text style={styles.link_text}> Privacy Policy.</Text> Tap “Agree and continue” to accept the <Text style={styles.link_text}> Teams of Service </Text></Text>
         </View>

         <ButtonComp title={"Agree  And Contune"} onPress={onAgree}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.fromtext}> From </Text>
        <Text style={styles.facebooktext}>Facebook</Text>
      </View>
      
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingVertical: verticalScale(84),
    paddingHorizontal:scale(30)
  },
  header: {
    alignItems:'center',
    width:'100%',
    gap:moderateScale(30)
  },
  footer: {
   
  },
  fromtext: {
    fontSize: moderateScale(12),
    color: '#867373',
    marginTop: moderateScale(10),
    textAlign: 'center', 
    
    

  },
  facebooktext: {
    fontSize: moderateScale(15),
    color: '#000000',
    textTransform: 'uppercase',
    fontWeight:600
  },
  whatsappText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },

  images:{ 
 width:moderateScale(250),
 height:moderateScale(250),
 borderRadius:moderateScale(250)
  }
  ,

  description_text:{
    textAlign:'center',
    fontSize: moderateScale(13),
    color:'#000'
  },
  link_text:{
    color:'#0c42cc'
  }
});

 
export default terms_agree