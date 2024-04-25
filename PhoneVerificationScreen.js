import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { getAuth, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';
import AuthButton from '../components/auth/AuthButton'; // Adjust the path as necessary
import colors from '../constants/colors'; // Adjust path as necessary
import firebaseConfig from '../APIs/firebase'; // Make sure this exports your Firebase config object

export default function PhoneVerificationScreen() {
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [confirm, setConfirm] = useState(null);
    const recaptchaVerifier = useRef(null);
    const auth = getAuth(); // Ensure Firebase auth is properly initialized

    const handleSignInWithPhoneNumber = async (phoneNumber) => {
        setLoading(true);
        try {
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);
            setConfirm(confirmation);
            Alert.alert("SMS Sent", "Code has been sent to your phone.");
        } catch (error) {
            console.error("Authentication error:", error);
            Alert.alert('Sign in error', error.message);
        } finally {
            setLoading(false);
        }
    };

    const confirmCode = async () => {
        try {
            if (!confirm) {
                throw new Error("No confirmation process active.");
            }
            const result = await confirm.confirm(code);
            Alert.alert('Success', 'Phone number verified!');
        } catch (error) {
            console.error("Verification error:", error);
            Alert.alert('Verification error', error.message);
        }
    };

    if (!confirm) {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                    attemptInvisibleVerification={true}
                />
                <Text style={styles.text}>Enter Phone Number:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                />
                <AuthButton title="Send Verification Code" onPress={() => handleSignInWithPhoneNumber(phoneNumber)} loading={loading} />
            </KeyboardAvoidingView>
        );
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text style={styles.text}>Enter Verification Code:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCode}
                value={code}
                placeholder="Verification Code"
                keyboardType="number-pad"
            />
            <AuthButton title="Verify Code" onPress={confirmCode} loading={loading} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: colors.rich_black,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        color: colors.light_wisteria,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.russian_violet,
    },
});
