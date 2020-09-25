import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Height from '../../components/Height/Height';
import Distance from '../../components/Distance/Distance';
import Avatars from '../../components/Avatars/Avatars';

const pages = () => {
  return (
    <View style={styles.container}>
      <Text>PAGES</Text>
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
    backgroundColor: '#F0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
  },
});

export default pages;
