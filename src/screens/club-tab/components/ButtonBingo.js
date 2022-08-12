import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalButton from '@components/GlobalButton';
import {ratioW} from '@utils';

const ButtonBingo = () => {
  return (
    <GlobalButton
      isLinear={true}
      text={'Bingo'}
      containerStyle={styles.container}
    />
  );
};

export default ButtonBingo;

const styles = StyleSheet.create({
  container: {
    width: ratioW(159),
    height: ratioW(48),
  },
});
