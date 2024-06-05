import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title='Got to Gallery'
        onPress={() => navigation.navigate('gallery')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1ab7da',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  
export default Home;
