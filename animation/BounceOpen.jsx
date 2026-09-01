// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import React, { useState } from 'react';

// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';

// const BounceOpen = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const rotation = useSharedValue(0);
//   const containerHeight = useSharedValue(0);
//   const trnaslateY = useSharedValue(20);
// //   const translateX = useSharedValue(20)
//   const opacity = useSharedValue(0);

//   const animatedButtonStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           rotate: `${rotation.value}deg`,
//         },
//       ],
//     };
//   });

//   const animatedContainerStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       height: containerHeight.value,
//       transform: [
//         {
//           translateY: trnaslateY.value,
//         //   translateX: translateX.value,
//         },
//       ],
//     };
//   });

//   const toggleMenu = () => {
//     if (!isClicked) {
//       setIsClicked(true);

//       opacity.value = withTiming(360, {
//         duration: 300,
//       });

//       containerHeight.value = withTiming(60, {
//         duration: 300,
//       });

//       trnaslateY.value = withTiming(0, {
//         duration: 300,
//       });

//     //   translateX.value = withTiming(0, {
//     //     duration: 300
//     //   })

//       opacity.value = withTiming(1, {
//         duration: 300,
//       });
//     } else {
//       setIsClicked(false);

//       opacity.value = withTiming(0, {
//         duration: 300,
//       });

//       containerHeight.value = withTiming(0, {
//         duration: 300,
//       });

//       trnaslateY.value = withTiming(20, {
//         duration: 300,
//       });

//     //   translateX.value = withTiming(20, {
//     //     duration: 300
//     //   })

//       opacity.value = withTiming(0, {
//         duration: 300,
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Upper menu */}
//       <Animated.View style={[styles.hideContainer, animatedContainerStyle]}>
//         <Text style={styles.menuText}>find</Text>
//         <Text style={styles.menuText}>search</Text>
//         <Text style={styles.menuText}>go</Text>
//       </Animated.View>

//       {/* Bottom button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={toggleMenu}
//         activeOpacity={0.5}
//       >
//         <Animated.Text style={[styles.text, animatedButtonStyle]}>
//           {isClicked ? '×' : '+'}
//         </Animated.Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BounceOpen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   hideContainer: {
//     backgroundColor: 'yellow',
//     flexDirection: 'row',
//     width: 300,
//     height: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//     gap: 8,
//     marginBottom: 10,
//     overflow: 'hidden',
//   },

//   button: {
//     backgroundColor: 'yellow',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   text: {
//     fontSize: 30,
//   },

//   menuText: {
//     fontSize: 18,
//   },
// });



// bounce type animation



// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import React, { useState } from 'react';

// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';

// const BounceOpen = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   //Menu width
//   const menuWidth = useSharedValue(60);

//   //MenuHeight
//   const menuHeight = useSharedValue(60);

//   //Opacity
//   const opacity = useSharedValue(0);

//   //Rotation
//   const rotation = useSharedValue(0);

//   const menuAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       height: menuHeight.value,
//       width: menuWidth.value,
//       opacity: opacity.value,
//     };
//   });

//   const toggleMenu = () => {
//     if (!isClicked) {
//       setIsClicked(true);

//       menuHeight.value = withSpring(60, {
//         damping: 12,
//         stiffness: 180,
//       });

//       menuWidth.value = withSpring(300, {
//         damping: 12,
//         stiffness: 180,
//         mass: 0.8,
//       });

//       opacity.value = withTiming(1, {
//         duration: 150,
//       });

//       opacity.value = withTiming(180, {
//         duration: 150,
//       });
//     } else {
//       setIsClicked(false);

//       menuHeight.value = withSpring(60, {
//         damping: 15,
//         stiffness: 200,
//       });

//       menuWidth.value = withSpring(60, {
//         damping: 15,
//         stiffness: 200,
//       });

//       opacity.value = withTiming(0, {
//         duration: 150,
//       });

//       rotation.value = withTiming(0, {
//         duration: 150,
//       });
//     }
//   };

//   const buttonAnimatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           rotate: `${rotation.value}deg`,
//         },
//       ],
//     };
//   });

//   return (
//     <View style={styles.container}>
//       {/* Upper menu */}
//       <Animated.View style={[styles.menu, menuAnimatedStyle]}>
//         <Text style={styles.menuText}>find</Text>

//         <Text style={styles.menuText}>search</Text>

//         <Text style={styles.menuText}>go</Text>
//       </Animated.View>

//       {/* Bottom button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={toggleMenu}
//         activeOpacity={0.5}
//       >
//         <Animated.Text style={[styles.buttonText, buttonAnimatedStyle]}>
//           {isClicked ? '×' : '+'}
//         </Animated.Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BounceOpen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   menu: {
//     backgroundColor: 'yellow',

//     minWidth: 60,
//     maxWidth: 300,

//     borderRadius: 30,

//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',

//     gap: 8,

//     marginBottom: 10,

//     overflow: 'hidden',
//   },

//   button: {
//     width: 60,
//     height: 60,

//     backgroundColor: 'yellow',

//     borderRadius: 30,

//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   buttonText: {
//     fontSize: 30,
//   },

//   menuText: {
//     fontSize: 18,
//   },
// });
