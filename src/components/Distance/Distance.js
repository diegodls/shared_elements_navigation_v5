import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//CONSTANTS
import {
  DETAILS_FOOTER_TEXT_BIG_HEIGHT,
  DETAILS_FOOTER_TEXT_BIG_LINEHEIGHT,
  MARGIN_TOP_TITLE_COMPONENTS,
  DETAILS_FOOTER_TEXT_BIG,
} from '../../config/Constants';

//STYLES
import colors from '../../styles/colors';

const Distance = () => {
  return (
    <View>
      <Text style={styles.title}>Distância</Text>
      <View style={styles.textContainer}>
        <Text style={styles.value}>321</Text>
        <Text style={styles.m}>m</Text>
      </View>
    </View>
  );
};

//{Math.floor(Math.random() * 1000) + 1}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: MARGIN_TOP_TITLE_COMPONENTS,
  },
  title: {
    color: colors.secondary,
    fontFamily: 'MavenPro-Regular',
  },
  value: {
    color: colors.secondary,
    fontSize: DETAILS_FOOTER_TEXT_BIG,
    fontFamily: 'MavenPro-Bold',
    height: DETAILS_FOOTER_TEXT_BIG_HEIGHT,
    lineHeight: DETAILS_FOOTER_TEXT_BIG_LINEHEIGHT,
  },
  m: {
    color: colors.secondary,
  },
});

export default Distance;
