import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const HomeScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, {user.email}!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;
