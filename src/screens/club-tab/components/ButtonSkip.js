import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalButton from '@components/GlobalButton';
import {ratioW} from '@utils';
import {CommonColors} from '@utils/CommomStyles';

const ButtonSkip = () => {
  return (
    <GlobalButton
      isLinear={false}
      text={'Skip'}
      containerStyle={styles.container}
      textStyle={{color: CommonColors.jade_green}}
    />
  );
};

export default ButtonSkip;

const styles = StyleSheet.create({
  container: {
    width: ratioW(159),
    height: ratioW(48),
    backgroundColor: '#E8F8F780',
  },
});
