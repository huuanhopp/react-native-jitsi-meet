import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {CommonColors, CommonSize, Fonts} from '@utils/CommomStyles';
import {ratioW} from '@utils';
import IconHeart from '@assets/svgs/club/icon_heart.svg';
import IconClock from '@assets/svgs/club/icon_clock.svg';
import IconUsers from '@assets/svgs/club/icon_user.svg';
import IconUserRoom from '@assets/svgs/club/icon_user_room.svg';
import GradientText from '@components/GradientText';
import {navigate} from '@src/navigations/NavigationHelper';
import {SCREEN_NAME} from '@utils/Const';

const Header = () => {
  function renderInfo() {
    return (
      <View style={styles.wrapTime}>
        <View style={styles.row}>
          <IconHeart height={ratioW(20)} width={ratioW(20)} />
          <Text style={styles.textTime}>3</Text>
        </View>
        <View style={[styles.row, styles.paddingLeft]}>
          <IconClock height={ratioW(20)} width={ratioW(20)} />
          <Text style={styles.textTime}>12 phút</Text>
        </View>
        <View style={[styles.row, styles.paddingLeft]}>
          <IconUsers height={ratioW(20)} width={ratioW(20)} />
          <Text style={styles.textTime}>30 người</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.wrapHeader}>
      <View style={styles.bodyHeader}>
        <View style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>Đo Ngoc Hai</Text>
          {renderInfo()}
        </View>
      </View>
    </View>
  );
};

const ItemRoom = () => {
  function onPress() {
    navigate(SCREEN_NAME.CHOOSE_ACTION_SCREEN);
  }
  function renderHeader() {
    return (
      <View style={styles.descriptionRoom}>
        <Text style={styles.roomNumber}>P1</Text>
        <View style={styles.statusRoom}>
          <GradientText
            style={[styles.titleStatus]}
            colors={[CommonColors.red9, CommonColors.red10]}>
            Full
          </GradientText>
        </View>
      </View>
    );
  }
  function renderBody() {
    return (
      <View style={{flexDirection: 'row'}}>
        <IconUserRoom />
        <IconUserRoom
          fill={CommonColors.white4}
          style={{marginLeft: ratioW(10)}}
        />
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.wrapItem}>
      {renderHeader()}
      {renderBody()}
    </TouchableOpacity>
  );
};

const ListRoomClubScreen = () => {
  function renderItem({item, index}) {
    return <ItemRoom item={item} />;
  }

  function renderSpe() {
    return <View style={{height: ratioW(8)}} />;
  }
  function renderBody() {
    return (
      <FlatList
        data={new Array(20).fill(0)}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={renderSpe}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      {renderBody()}
    </View>
  );
};

export default ListRoomClubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white1,
  },
  wrapHeader: {
    paddingBottom: 25,
    width: CommonSize.srcWidth,
    paddingTop: ratioW(80) - CommonSize.heightTopWithoutIphoneX,
    backgroundColor: '#FFFFFF80',
  },
  bodyHeader: {
    flexDirection: 'row',
    paddingHorizontal: ratioW(32),
    alignItems: 'center',
  },
  avatar: {
    height: ratioW(40),
    width: ratioW(40),
    backgroundColor: 'green',
    borderRadius: ratioW(40),
  },
  info: {
    marginLeft: ratioW(10),
  },
  name: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(16),
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(24),
    color: CommonColors.blue1,
  },
  wrapTime: {
    flexDirection: 'row',
    marginTop: ratioW(8),
  },
  textTime: {
    color: CommonColors.gray12,
    ...Fonts.BeVietnamProRegular,
    fontSize: ratioW(12),
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(12),
    marginLeft: ratioW(5.5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingLeft: {
    marginLeft: ratioW(14),
  },
  wrapItem: {
    width: ratioW(160),
    height: ratioW(95),
    backgroundColor: CommonColors.white,
    borderRadius: ratioW(16),
    padding: ratioW(12),
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: ratioW(24),
    marginTop: ratioW(15),
    paddingBottom: CommonSize.bottomTabHeight + 50,
  },
  descriptionRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusRoom: {
    width: ratioW(41),
    height: ratioW(23),
    borderRadius: ratioW(8),
    backgroundColor: CommonColors.red8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStatus: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(12),
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(18),
  },
  roomNumber: {
    color: CommonColors.gray12,
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(12),
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(18),
  },
});
