import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Retour à l'écran précédent
    navigation.goBack();
  };

  // Exemple de données de l'utilisateur
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    height: "180 cm",
    weight: "75 kg",
    avatar: require('../assets/images/avatar.jpg'), // Remplacez par l'image de l'avatar de l'utilisateur
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image source={userData.avatar} style={styles.avatar} />

      {/* Informations utilisateur */}
      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Name:</Text>
        <Text style={styles.userInfoText}>{userData.name}</Text>
        <Text style={styles.userInfoLabel}>Email:</Text>
        <Text style={styles.userInfoText}>{userData.email}</Text>
        <Text style={styles.userInfoLabel}>Height:</Text>
        <Text style={styles.userInfoText}>{userData.height}</Text>
        <Text style={styles.userInfoLabel}>Weight:</Text>
        <Text style={styles.userInfoText}>{userData.weight}</Text>
      </View>

      {/* Bouton "Go Back" */}
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  userInfoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  button: {
    backgroundColor: '#571D62',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
