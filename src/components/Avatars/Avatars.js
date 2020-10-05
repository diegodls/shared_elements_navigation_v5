import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

//CONSTANTS
import {
  DETAILS_FOOTER_AVATAR_WIDTH,
  MARGIN_TOP_TITLE_COMPONENTS,
  DETAILS_FOOTER_AVATAR_SHOW,
} from '../../config/Constants';

//STYLES
import colors from '../../styles/colors';

//MOCKED_DATA
import { generatePeoples } from '../../config/data/peoples/peoples';

const Avatars = () => {
  const MOCKED_DATA = generatePeoples(10);

  return (
    <View>
      <Text style={styles.title}>Seu time</Text>
      <View style={styles.avatarsRow}>
        {MOCKED_DATA.splice(0, DETAILS_FOOTER_AVATAR_SHOW).map(
          (item, index) => {
            return (
              <Image
                key={index}
                style={[
                  styles.avatar,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    zIndex: MOCKED_DATA.length - index,
                    marginLeft: index === 0 ? 0 : -20,
                  },
                ]}
                source={item.image}
              />
            );
          },
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarsRow: {
    flexDirection: 'row',
    marginTop: MARGIN_TOP_TITLE_COMPONENTS,
  },
  title: {
    fontFamily: 'MavenPro-Regular',
    color: colors.secondary,
  },
  avatar: {
    width: DETAILS_FOOTER_AVATAR_WIDTH,
    height: DETAILS_FOOTER_AVATAR_WIDTH,
    borderRadius: DETAILS_FOOTER_AVATAR_WIDTH / 2,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: colors.primary,
  },
});

export default Avatars;
