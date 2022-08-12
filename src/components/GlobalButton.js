import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {isEqual} from 'lodash';
import {ratioW} from '@utils';
import {MaterialIndicator} from 'react-native-indicators';
import {CommonColors, CommonSize, Fonts} from '@utils/CommomStyles';
import LinearGradient from 'react-native-linear-gradient';
import {isDisabled} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const GlobalButton = ({
  disabled,
  onPress,
  text = '',
  containerStyle = {},
  textStyle = {},
  activeOpacity = 0.7,
  isLoading,
  colorLoading,
  numberOfLines,
  iconRight,
  disabledColor,
  isLinear,
  arrLinear,
  shadowStyle,
  useShadow,
  borderRadius = ratioW(12),
  wrapBtn,
  bgDisable,
  locations,
  ...props
}) => {
  const renderBody = () => {
    return (
      <>
        {isLoading && (
          <View style={styles.loading}>
            <MaterialIndicator
              size={20}
              color={colorLoading || CommonColors.yellow}
            />
          </View>
        )}
        <View style={styles.buttonTextStyle}>
          <Text
            style={[
              styles.text,
              textStyle,
              disabled && {color: disabledColor || CommonColors.white},
            ]}
            numberOfLines={numberOfLines || undefined}>
            {text}
          </Text>
          {iconRight}
        </View>
      </>
    );
  };

  const renderContent = () => {
    if (disabled && bgDisable) {
      return (
        <View
          style={[
            styles.wrapBtn,
            borderRadius && {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
            wrapBtn,
            {backgroundColor: bgDisable},
          ]}>
          {renderBody()}
        </View>
      );
    }
    if (isLinear) {
      return (
        <LinearGradient
          style={[
            styles.wrapBtn,
            borderRadius && {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
            wrapBtn,
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          useAngle={true}
          angle={286}
          locations={locations || [0.25, 0.95]}
          colors={
            arrLinear || [CommonColors.jade_green, CommonColors.jade_green1]
          }>
          {renderBody()}
        </LinearGradient>
      );
    }
    return <View style={[styles.wrapBtn, wrapBtn]}>{renderBody()}</View>;
  };
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled || isLoading}
      style={[
        styles.container,
        {opacity: disabled ? 0.5 : 1},
        containerStyle,
        useShadow && shadowStyle,
      ]}
      onPress={onPress}
      {...props}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default React.memo(GlobalButton, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps),
);

const styles = StyleSheet.create({
  container: {
    height: ratioW(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ratioW(12),
    flexDirection: 'row',
    width: ratioW(295),
  },
  text: {
    fontSize: ratioW(20),
    color: CommonColors.white,
    textAlign: 'center',
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(26),
    ...Fonts.BeVietnamProBold,
  },
  loading: {
    marginRight: ratioW(8),
  },
  buttonTextStyle: {flexDirection: 'row', alignItems: 'center'},
  wrapBtn: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ratioW(24),
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: CommonColors.jade_green1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

GlobalButton.defaultProps = {
  disabled: false,
  // textColor: CommonColors.dark,
  // backgroundColor: CommonColors.peri,
  shadowStyle: styles.shadow,
};
