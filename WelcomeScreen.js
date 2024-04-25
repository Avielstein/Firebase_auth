import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import WelcomeHeader from '../components/auth/WelcomeHeader';
import AuthButton from '../components/auth/AuthButton';
import useFadeIn from '../components/auth/FadeInAnimation';
import colors from '../constants/colors'; // Make sure this path is correct


const WelcomeScreen = ({ navigation }) => {
  const fadeAnim = useFadeIn(); // Use the fade-in animation

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <WelcomeHeader />
        <View style={styles.buttonContainer}>
          <AuthButton title="Sign In" onPress={() => navigation.navigate('SignIn')} />
          <AuthButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
        <AuthButton title="Sign Up" onPress={() => navigation.navigate('PhoneVerification')} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rich_black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
