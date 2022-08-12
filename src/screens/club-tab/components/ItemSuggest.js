import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ratioW} from '@utils';
import {CommonColors, Fonts} from '@utils/CommomStyles';
import IconLightClub from '@screens/club-tab/components/IconLightClub';

const ItemSuggest = ({title, containerStyle}) => {
  const [isActive, setActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setActive(!isActive)}
      activeOpacity={0.8}
      style={[
        styles.container,
        isActive && {backgroundColor: '#FFF2E680'},
        containerStyle,
      ]}>
      <IconLightClub
        strokeColor={isActive ? CommonColors.orange4 : CommonColors.B_W}
      />
      <Text
        style={[
          styles.title,
          {color: isActive ? CommonColors.orange4 : CommonColors.B_W},
        ]}>
        {title || ''}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemSuggest;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    height: ratioW(32),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CommonColors.gray3,
    borderRadius: ratioW(12),
  },
  title: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(14),
    color: CommonColors.B_W,
    marginLeft: 1,
  },
});
