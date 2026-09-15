import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const DropDownCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Animation values
  const rotation = useSharedValue(0);

  const opacity = useSharedValue(0);

  const skills = useSharedValue(20);

  const skillsScale = useSharedValue(0.95);

  const viewButton = useSharedValue(30);

  const viewButtonOpacity = useSharedValue(0);

  const cardHeight = useSharedValue(60);

  // Arrow animation
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  // Skills animation
  const skillsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,

      transform: [
        {
          translateY: skills.value,
        },
        {
          scale: skillsScale.value,
        },
      ],
    };
  });

  // View Profile button animation
  const viewButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: viewButtonOpacity.value,

      transform: [
        {
          translateY: viewButton.value,
        },
      ],
    };
  });

  // Card height animation
  const cardHeightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: cardHeight.value,
    };
  });

  const toggleMenu = () => {
    if (!isClicked) {
      // OPEN

      setIsClicked(true);

      // Card expands
      cardHeight.value = withSpring(250, {
        damping: 15,
        stiffness: 180,
      });

      // Arrow rotates with a small overshoot
      rotation.value = withSequence(
        withTiming(190, {
          duration: 150,
        }),
        withTiming(180, {
          duration: 100,
        }),
      );

      // Skills fade in
      opacity.value = withDelay(
        100,
        withTiming(1, {
          duration: 250,
        }),
      );

      // Skills slide upward
      skills.value = withSpring(0, {
        damping: 15,
        stiffness: 300,
      });

      // Skills scale
      skillsScale.value = withSpring(1, {
        damping: 15,
        stiffness: 300,
      });

      // View Profile button
      viewButtonOpacity.value = withDelay(
        250,
        withTiming(1, {
          duration: 200,
        }),
      );

      viewButton.value = withDelay(
        250,
        withSpring(0, {
          damping: 12,
          stiffness: 180,
        }),
      );
    } else {
      // CLOSE

      setIsClicked(false);

      // Card collapses
      cardHeight.value = withSpring(60, {
        damping: 18,
        stiffness: 180,
      });

      // Arrow rotates back
      rotation.value = withSequence(
        withTiming(-10, {
          duration: 150,
        }),
        withTiming(0, {
          duration: 100,
        }),
      );

      // Content fades out
      opacity.value = withTiming(0, {
        duration: 150,
      });

      // Content moves down
      skills.value = withSpring(20, {
        damping: 15,
        stiffness: 180,
      });

      // Content scales down
      skillsScale.value = withSpring(0.95, {
        damping: 15,
        stiffness: 180,
      });

      // View Profile button disappears
      viewButtonOpacity.value = withTiming(0, {
        duration: 100,
      });

      viewButton.value = withSpring(30, {
        damping: 15,
        stiffness: 180,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, cardHeightAnimatedStyle]}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Jahanzaib</Text>

            <Text style={styles.role}>React Native Developer</Text>
          </View>

          <TouchableOpacity onPress={toggleMenu} activeOpacity={0.7}>
            <AnimatedIcon
              name="arrow-down"
              style={[styles.icon, buttonAnimatedStyle]}
            />
          </TouchableOpacity>
        </View>

        {/* Expanded Content */}
        <View style={styles.content}>
          <Animated.View style={skillsAnimatedStyle}>
            <Text style={styles.skill}>React Native</Text>

            <Text style={styles.skill}>Firebase</Text>

            <Text style={styles.skill}>Redux Toolkit</Text>
          </Animated.View>

          <Animated.View style={viewButtonAnimatedStyle}>
            <TouchableOpacity style={styles.profileButton} activeOpacity={0.7}>
              <Text style={styles.profileButtonText}>View Profile</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default DropDownCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7D6D0',
  },

  card: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 10,
    overflow: 'hidden',
  },

  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  role: {
    fontSize: 11,
    color: '#777',
  },

  icon: {
    fontSize: 30,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  skill: {
    fontSize: 15,
    marginVertical: 4,
  },

  profileButton: {
    backgroundColor: '#F7D6D0',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },

  profileButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
