 import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen, Stack } from 'expo-router'

SplashScreen.preventAutoHideAsync()
const RootNavigations = () => {


  const [isLoging, setisLoging] = useState(false);

  useEffect(()=>{
     SplashScreen.hideAsync() 
  },[])
  return (
   <>
   <Stack screenOptions={{headerShown:false}}/>
   {

       isLoging  ?  (<Redirect href={"/(main)"}/>)  :  (<Redirect href={"/(auth)"}/>)
   }
    
   </>
  )
}

export default RootNavigations;
