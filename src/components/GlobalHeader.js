import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {ratioH, ratioW} from '@utils';
import {
  CommonColors,
  CommonSize,
  Fonts,
  hitSlop,
  navPadding,
} from '@utils/CommomStyles';

const GlobalHeader = ({
  containerStyle,
  iconRight,
  onPressRight,
  iconLeft,
  onPressLeft,
  title,
  titleStyle,
}) => {
  return (
    <View
      style={[styles.container, containerStyle, {paddingTop: navPadding()}]}>
      <View style={styles.body}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <Pressable
          disabled={!iconLeft}
          style={[styles.iconLeft, {opacity: iconLeft ? 1 : 0}]}
          onPress={onPressLeft}
          hitSlop={hitSlop}>
          {iconLeft || <View />}
        </Pressable>
        <Pressable
          disabled={!iconRight}
          style={[styles.iconRight, {opacity: iconRight ? 1 : 0}]}
          onPress={onPressRight}
          hitSlop={hitSlop}>
          {iconRight || <View />}
        </Pressable>
      </View>
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  container: {
    height: ratioW(80) - CommonSize.heightTopWithoutIphoneX,
    backgroundColor: CommonColors.white,
    justifyContent: 'flex-end',
    paddingHorizontal: ratioW(16),
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: CommonColors.gray1,
    alignSelf: 'center',
    fontSize: ratioH(16),
    ...Fonts.BeVietnamProBold,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
  iconLeft: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
  },
  iconRight: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
  },
});
