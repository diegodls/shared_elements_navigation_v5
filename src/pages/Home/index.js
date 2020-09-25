import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFE from 'react-native-vector-icons/Feather';

IconFE.loadFont();
import colors from '../../styles/colors';

const Home = () => {
  //HOOKS
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View>
          <Text>Detalhes</Text>
          <IconFE
            name={'arrow-right-circle'}
            color={colors.secondary}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
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
  },
});

export default Home;
