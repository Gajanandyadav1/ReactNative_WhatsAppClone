import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const terms_agree = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
         <Text style={styles.whatsappText}>Welcome to Whatsapp</Text>
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
  },
  header: {
     
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
});

 
export default terms_agree