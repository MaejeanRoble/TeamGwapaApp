import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native'; // Import ImageBackground
import { MaterialIcons } from '@expo/vector-icons'; // Import Material Icons

const ContactScreen = () => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = () => {
    // Here you can handle the submission of the message, 
    // such as sending it to your backend server or processing it locally.
    console.log('Message submitted:', message);
    // Optionally, you can clear the message box after submission
    setMessage('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/fe/b3/e6/feb3e6bc5366b72823f770c7cce3eee3.jpg' }} // Replace 'your_background_image_uri_here' with your actual image URI
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>
        <View style={styles.infoContainer}>
          <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>teamgwapa@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="phone" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>09109724361</Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Manolo Fortich Bukidnon 8703</Text>
        </View>
        {/* Message box */}
        <View style={styles.messageContainer}>
          <TextInput
            style={styles.messageInput}
            multiline
            placeholder="Type your message here"
            value={message}
            onChangeText={setMessage}
          />
          <Button title="Send" onPress={handleMessageSubmit} />
        </View>
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', // Set text color to contrast with background
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: 'black', // Set text color to contrast with background
  },
  messageContainer: {
    marginTop: 20,
  },
  messageInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'black', // Set text color to contrast with background
  },
  icon: {
    marginRight: 10,
  },
});

export default ContactScreen;
