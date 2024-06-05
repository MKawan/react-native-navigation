import {StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';

const Gallery = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
      <Button
        title='Got to Home'
        onPress={() => navigation.navigate('home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1ada30',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

export default Gallery;
