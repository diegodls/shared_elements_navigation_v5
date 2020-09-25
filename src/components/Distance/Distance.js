import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

//CONSTANTS
import {MARGIN_TOP_TITLE_COMPONENTS} from '../../config/Constants';

const Distance = () => {
  return (
    <View>
      <Text style={styles.title}>Distância</Text>
      <View style={styles.textContainer}>
        <Text style={styles.value}>{Math.floor(Math.random() * 1000) + 1}</Text>
        <Text style={styles.m}>m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: MARGIN_TOP_TITLE_COMPONENTS,
  },
  title: {
    fontFamily: 'MavenPro-Regular',
  },
  value: {
    fontSize: 20,
    fontFamily: 'MavenPro-Bold',
  },
});

export default Distance;
