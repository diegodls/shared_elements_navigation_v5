import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//COMPONENTS
import Avatars from '../../components/Avatars/Avatars';
import Distance from '../../components/Distance/Distance';
import Height from '../../components/Height/Height';

//STYLES
import colors from '../../styles/colors';

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Details</Text>
      </View>
      <View style={styles.footer}>
        <Avatars />
        <Distance />
        <Height />
      </View>
    </View>
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
    width: '100%',
    justifyContent: 'space-around',
  },
  textContainer: {
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: 40,
    height: 27,
    lineHeight: 35,
    fontFamily: 'MavenPro-Bold',
    padding: 0,
    color: colors.secondary,
  },
});

export default Details;
