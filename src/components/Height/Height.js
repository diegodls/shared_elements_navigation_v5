import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//CONSTANTS
import {
  MARGIN_TOP_TITLE_COMPONENTS,
  DETAILS_FOOTER_TEXT_BIG_HEIGHT,
  DETAILS_FOOTER_TEXT_BIG_LINEHEIGHT,
  DETAILS_FOOTER_TEXT_BIG,
} from '../../config/Constants';

//STYLES
import colors from '../../styles/colors';
const Height = () => {
  return (
    <View>
      <Text style={styles.title}>Altura</Text>
      <View style={styles.textContainer}>
        <Text style={styles.value}>
          {Math.floor(Math.random() * 2200) + 1000}
        </Text>
        <Text style={styles.m}>m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.secondary,
    fontFamily: 'MavenPro-Regular',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: MARGIN_TOP_TITLE_COMPONENTS,
  },
  value: {
    fontSize: DETAILS_FOOTER_TEXT_BIG,
    height: DETAILS_FOOTER_TEXT_BIG_HEIGHT,
    lineHeight: DETAILS_FOOTER_TEXT_BIG_LINEHEIGHT,
    fontFamily: 'MavenPro-Bold',
    color: colors.secondary,
  },
  m: {
    color: colors.secondary,
  },
});

export default Height;
