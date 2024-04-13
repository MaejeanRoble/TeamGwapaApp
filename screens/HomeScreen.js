// screens/HomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const HomeTab = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/fe/b3/e6/feb3e6bc5366b72823f770c7cce3eee3.jpg' }}
      style={styles.background}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}> Welcome to Team Gwapa, where every cup tells a story and every sip is a celebration of flavor!   </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    textAlign: 'center',
    color: 'black', // changed to black
    fontSize: 20,
    padding: 20,
    marginBottom: 300 // adjusted downward
  }
});

export default HomeTab;

