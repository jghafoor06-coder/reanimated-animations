import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const FadeInFadeOut = () => {
  const cards = [
    {
      id: 1,
      title: 'React Native',
      description: 'Build mobile apps using JavaScript and React.',
      category: 'Development',
      image: 'https://picsum.photos/400/250?random=1',
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Learn the language of modern web development.',
      category: 'Programming',
      image: 'https://picsum.photos/400/250?random=2',
    },
    {
      id: 3,
      title: 'React',
      description: 'Create fast and reusable user interfaces.',
      category: 'Frontend',
      image: 'https://picsum.photos/400/250?random=3',
    },
    {
      id: 4,
      title: 'Firebase',
      description: 'Add authentication, database, and storage to your apps.',
      category: 'Backend',
      image: 'https://picsum.photos/400/250?random=4',
    },
    {
      id: 5,
      title: 'Redux Toolkit',
      description: 'Manage application state in a simple and scalable way.',
      category: 'State Management',
      image: 'https://picsum.photos/400/250?random=5',
    },
    {
      id: 6,
      title: 'Node.js',
      description: 'Build powerful backend applications with JavaScript.',
      category: 'Backend',
      image: 'https://picsum.photos/400/250?random=6',
    },
    {
      id: 7,
      title: 'MongoDB',
      description: 'Store and manage data using a flexible NoSQL database.',
      category: 'Database',
      image: 'https://picsum.photos/400/250?random=7',
    },
    {
      id: 8,
      title: 'Tailwind CSS',
      description: 'Style modern interfaces using utility classes.',
      category: 'CSS',
      image: 'https://picsum.photos/400/250?random=8',
    },
    {
      id: 9,
      title: 'GitHub',
      description: 'Store, manage, and collaborate on your projects.',
      category: 'Tools',
      image: 'https://picsum.photos/400/250?random=9',
    },
    {
      id: 10,
      title: 'TypeScript',
      description: 'Write safer and more maintainable JavaScript code.',
      category: 'Programming',
      image: 'https://picsum.photos/400/250?random=10',
    },
  ];

  return (
     <View style={styles.container}>
      <Animated.FlatList
        data={cards}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInUp.delay(index * 100).duration(500)}
            style={styles.card}
          >
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

            <Text style={styles.category}>
              {item.category}
            </Text>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default FadeInFadeOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 8,
    color: 'gray',
  },

  category: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});