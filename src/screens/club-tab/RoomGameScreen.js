import React, {useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {CommonColors, CommonSize, Fonts, hitSlop} from '@utils/CommomStyles';
import {formatSecondToMunite, ratioW} from '@utils';
import IconClose from '@assets/svgs/header/ic_close.svg';
import GlobalButton from '@components/GlobalButton';
import {goBack} from '@src/navigations/NavigationHelper';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import ItemUser from '@screens/club-tab/components/ItemUser';
import TimeCountDown from '@screens/club-tab/components/TimeCountDown';
import ButtonBingo from '@screens/club-tab/components/ButtonBingo';
import ButtonSkip from '@screens/club-tab/components/ButtonSkip';
import Suggest from '@screens/club-tab/components/Suggest';

const ROLE = {
  notSet: 'notSet',
  key: 'key',
  member: 'member',
};

const SUGGEST = [
  'Topic',
  'Function',
  'Antonym',
  'hiih',
  'gdfgdfgdf',
  'fgdgerter',
  'Hữu Anh đẹp trai',
];

const RoomGameScreen = () => {
  const timeCountDownRef = useRef(null);
  const [role, setRole] = useState(ROLE.key);
  function handleStartNow() {
    timeCountDownRef.current?.onStart();
  }
  function renderHeader() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          hitSlop={hitSlop}
          style={{marginLeft: 20}}>
          <IconClose fill={CommonColors.gray11} />
        </TouchableOpacity>
      </View>
    );
  }
  function renderUserInfo() {
    return (
      <View style={styles.userInfo}>
        <ItemUser />
        <ItemUser />
      </View>
    );
  }

  function renderCountDown() {
    return (
      <View style={styles.countDownContainer}>
        <CountdownCircleTimer
          isPlaying
          duration={300}
          size={ratioW(52)}
          strokeWidth={4}
          colors={[CommonColors.green]}
          colorsTime={[600]}>
          {({remainingTime}) => (
            <Text style={styles.time}>
              {formatSecondToMunite(remainingTime)}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>
    );
  }

  function renderSuggest() {
    return <Suggest suggests={SUGGEST} />;
  }

  function renderBody() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.body}>
          <Text style={styles.titleWait}>
            4 phút cho mỗi lượt chơi Hãy đoán từ vựng mà người khác đang mô tả
            nhé
          </Text>
          {renderCountDown()}
        </View>
        {renderSuggest()}
        <TimeCountDown onEnd={() => alert('end')} ref={timeCountDownRef} />
      </View>
    );
  }

  function renderButtonStart() {
    let title = role === ROLE.key ? 'Bắt đầu ngay' : 'Tôi đã sẵn sàng';
    if (role === ROLE.notSet) {
      return <View />;
    }
    return (
      <GlobalButton
        text={title}
        isLinear={true}
        disabledColor={CommonColors.B_W}
        disabled={false}
        bgDisable={CommonColors.gray3}
        onPress={handleStartNow}
        containerStyle={styles.btnReady}
      />
    );
  }

  function renderButtonControl() {
    return (
      <View style={styles.wrapButtonControl}>
        <ButtonSkip />
        <ButtonBingo />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {renderHeader()}
        {renderUserInfo()}
        {renderBody()}
      </View>
      {/*{renderButtonStart()}*/}
      {renderButtonControl()}
    </View>
  );
};

export default RoomGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
  header: {
    marginTop: ratioW(65) - CommonSize.heightTopWithoutIphoneX,
  },
  img: {
    height: ratioW(80),
    width: ratioW(80),
    backgroundColor: 'red',
    borderRadius: ratioW(80),
  },
  userInfo: {
    marginTop: ratioW(10),
    marginHorizontal: ratioW(76),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  btnReady: {
    marginBottom: ratioW(48) - CommonSize.heightBottomWithoutIphoneX,
    alignSelf: 'center',
  },
  body: {
    marginTop: ratioW(32),
    width: CommonSize.srcWidth - 52,
    height: ratioW(189),
    borderRadius: ratioW(24),
    backgroundColor: CommonColors.white1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWait: {
    ...Fonts.BeVietnamProRegular,
    fontSize: ratioW(14),
    maxWidth: ratioW(262),
    color: CommonColors.gray11,
    textAlign: 'center',
  },
  titleReady: {
    ...Fonts.BeVietnamProSemiBold,
    width: ratioW(307),
    textAlign: 'center',
    marginTop: ratioW(47),
    fontSize: ratioW(24),
    color: CommonColors.blue1,
  },
  time: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(14),
    color: CommonColors.green,
  },
  countDownContainer: {
    position: 'absolute',
    top: -ratioW(20),
    backgroundColor: CommonColors.white1,
    borderRadius: ratioW(50),
    padding: ratioW(3.5),
  },
  suggestContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 35,
    marginTop: 10,
    flexWrap: 'wrap',
  },
  wrapButtonControl: {
    flexDirection: 'row',
    width: CommonSize.srcWidth - 50,
    marginHorizontal: 25,
    justifyContent: 'space-between',
    marginBottom: ratioW(48) - CommonSize.heightBottomWithoutIphoneX,
  },
});
