import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF5F5',
          paddingBottom: 20,
          position: 'absolute',
          bottom: 30,
          borderRadius: 40,
          right: 35,
          left: 35,
          height: 90,
          borderTopWidth: 1,
          borderColor: '#eee',
          paddingTop: 15,
        },
        tabBarButton: props => (
          <TouchableOpacity {...props} activeOpacity={0.5} />
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e39a8d',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
