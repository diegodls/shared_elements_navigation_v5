import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const pages = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>pages</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default pages;
