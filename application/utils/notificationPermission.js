import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export async function requestPermission() {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      const result = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      return result === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }
  const status = await messaging().requestPermission();
  return (
    status === messaging.AuthorizationStatus.AUTHORIZED ||
    status === messaging.AuthorizationStatus.PROVISIONAL
  );
}

export async function logToken() {
  const granted = await requestPermission();
  console.log('granted', granted);
  if (!granted) return;

  const token = await messaging().getToken();
  console.log('FCM token', token);

  return messaging().onTokenRefresh(newToken => {
    console.log('FCM TOKEN REFRESHED:', newToken);
  });
}
