import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (email === '') {
      Alert.alert('enter an email');
      return;
    }
    if (password === '') {
      Alert.alert('enter an password');
      return;
    }
    try {
      createUserWithEmailAndPassword(getAuth(), email, password);
      Alert.alert('user created successfully!');
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '903206008495-6i48o3kih3blrgpl5ri49m8s3qjs82qc.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const response = await GoogleSignin.signIn();
      const idToken = response.data?.idToken ?? response.idToken;
      if (!idToken) return;

      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(getAuth(), credential);
      Alert.alert('Signed in!');
    } catch (error) {
      console.log('code:', error.code, 'message:', error.message);

      if (error.code === statusCodes.IN_PROGRESS) {
        return; // already running, ignore
      }
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return; // user closed the popup
      }
      Alert.alert('Google sign-in failed', `${error.code}\n${error.message}`);
    }
  };

  //   const handleSignupWithGoogle = () => {};
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign up with email</Text>
      <TextInput
        placeholder="enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleSignup}>
        <Text>Sign up</Text>
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={handleGoogleSignIn}>
          <Text>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
