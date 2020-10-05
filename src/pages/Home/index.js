import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFE from 'react-native-vector-icons/Feather';

IconFE.loadFont();

//THEME
import colors from '../../styles/colors';

import image_1 from '../../config/data/posts/image_post_1.jpeg';

//MOCKED_DATA
import { generatePosts } from '../../config/data/posts/posts';

const Home = () => {
  //MOCKED_DATA
  const mockedPosts = generatePosts(20);

  //HOOKS
  const navigation = useNavigation();

  //FUNCTIONS
  const handleNavigation = (item) => {
    navigation.navigate('Details', item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <FlatList
        data={mockedPosts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleNavigation(item)}>
              <View style={styles.cardContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  cardText: {
    color: colors.secondary,
    fontSize: 36,
    fontFamily: 'MavenPro-Bold',
    textTransform: 'uppercase',
  },
});

export default Home;
