import IconMicSpeaking from '@assets/svgs/club/icon_mic_speaking.svg';
import IconMute from '@assets/svgs/club/icon_mic_off.svg';
import IconMic from '@assets/svgs/club/icon_mic.svg';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonColors, CommonSize, Fonts} from '@utils/CommomStyles';
import {ratioW} from '@utils';

function ItemUser() {
  function renderMic(style) {
    return <IconMic style={style} />;
  }
  return (
    <View style={styles.wrapItem}>
      <View>
        <View style={styles.img} />
        {renderMic(styles.mic)}
      </View>
      <Text style={styles.uName}>Trang</Text>
    </View>
  );
}

export default ItemUser;
const styles = StyleSheet.create({
  img: {
    height: ratioW(80),
    width: ratioW(80),
    backgroundColor: CommonColors.gray4,
    borderRadius: ratioW(80),
  },
  wrapItem: {
    alignItems: 'center',
  },
  uName: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(16),
    marginTop: ratioW(8),
    color: CommonColors.gray12,
  },
  mic: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
