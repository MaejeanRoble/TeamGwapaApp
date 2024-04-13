import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/fe/b3/e6/feb3e6bc5366b72823f770c7cce3eee3.jpg' }} // Replace 'your_background_image_uri_here' with your actual image URI
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoriteScreen;
