import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Practice = () => {
  const [isClicked, setIsClicked] = useState(false);

  const searchOpacity = useSharedValue(0);
  const favouriteOpacity = useSharedValue(0);
  const settingsOpacity = useSharedValue(0);
  const rotation = useSharedValue(0);
  const search = useSharedValue(20);
  const favourite = useSharedValue(20);
  const settings = useSharedValue(20);

  const buttonAnimtedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  const searchAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: searchOpacity.value,
      transform: [
        {
          translateY: search.value,
        },
      ],
    };
  });

  const favouriteAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: favouriteOpacity.value,
      transform: [
        {
          translateY: favourite.value,
        },
      ],
    };
  });

  const settingsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: settingsOpacity.value,
      transform: [
        {
          translateY: settings.value,
        },
      ],
    };
  });

  const toggleMenu = () => {
    if (!isClicked) {
      setIsClicked(true);

      searchOpacity.value = withDelay(
        50,
        withTiming(1, {
          duration: 150,
        }),
      );
      favouriteOpacity.value = withDelay(
        50,
        withTiming(1, {
          duration: 300,
        }),
      );

      settingsOpacity.value = withDelay(
        50,
        withTiming(1, {
          duration: 400,
        }),
      );
      

      rotation.value = withTiming(180, {
        duration: 150,
      });

      search.value = withSpring(-60, {
        damping: 30,
        stiffness: 380,
      });

      favourite.value = withSpring(-40, {
        damping: 30,
        stiffness: 380,
      });

      settings.value = withSpring(-20, {
        damping: 30,
        stiffness: 380,
      });
    } else {
      setIsClicked(false);

      searchOpacity.value = withDelay(
        50,
        withTiming(0, {
          duration: 200,
        }),
      );

      favouriteOpacity.value = withDelay(
        50,
        withTiming(0, {
          duration: 200,
        }),
      );
      settingsOpacity.value = withDelay(
        50,
        withTiming(0, {
          duration: 200,
        }),
      );

      rotation.value = withTiming(0, {
        duration: 150,
      });

      favourite.value = withSpring(20, {
        damping: 12,
        stiffness: 180,
      });

      search.value = withSpring(20, {
        damping: 12,
        stiffness: 180,
      });

      settings.value = withSpring(20, {
        damping: 12,
        stiffness: 180,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, searchAnimatedStyle]}>
        <Text style={styles.text}>Search</Text>
      </Animated.View>

      <Animated.View style={[styles.box, favouriteAnimatedStyle]}>
        <Text style={styles.text}>Favourite</Text>
      </Animated.View>

      <Animated.View style={[styles.box, settingsAnimatedStyle]}>
        <Text style={styles.text}>Settings</Text>
      </Animated.View>

      <TouchableOpacity style={[styles.button]} onPress={toggleMenu}>
        <Animated.Text style={[styles.text, buttonAnimtedStyle]}>
          {isClicked ? 'x' : '+'}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F7D6D0',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#4A4A4A',
    fontSize: 15,
    fontWeight: 400,
  },
  box: {
    backgroundColor: '#F7D6D0',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
});
