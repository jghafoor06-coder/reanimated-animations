// import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from 'react-native-reanimated';

// const App = () => {
//   const translateX = useSharedValue(0);

//   // const handlePress = () => {
//   //   width.value = withSpring(Math.random() * 100 + 50);
//   // }

//   //Animated style

//   const handlePress = () => {
//     translateX.value += 50;
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: withSpring(translateX.value * 5) }],
//   }));

//   return (
//     <Animated.View style={[styles.container]}>
//       <Animated.View style={[styles.h, animatedStyle]} />
//       <TouchableOpacity onPress={handlePress}>
//         <Text>Press</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   h: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'violet',
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import FadeInFadeOut from './animation/FadeInFadeOut'
// import BounceOpen from './animation/BounceOpen'
// import Practice from './animation/Practice'
// import DropDownCard from './animation/DropDownCard'
import SignupScreen from './application/screens/SignupScreen';

import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './application/navigation/RootNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <FadeInFadeOut/> */}
      {/* <BounceOpen/> */}
      {/* <Practice/> */}
      {/* <DropDownCard/> */}
      {/* <NavigationContainer>
        <MyTabs/>
      </NavigationContainer> */}
      <SignupScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
