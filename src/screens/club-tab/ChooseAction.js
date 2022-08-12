import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CommonColors, CommonSize, Fonts} from '@utils/CommomStyles';
import GlobalHeader from '@components/GlobalHeader';
import BackIcon from '@assets/svgs/common/back.svg';
import {useNavigation} from '@react-navigation/native';
import {ratioW} from '@utils';
import {navigate, replace} from '@src/navigations/NavigationHelper';
import {SCREEN_NAME} from '@utils/Const';

const arrAction = [
  {
    id: 1,
    question: 'Đoán từ',
  },
  {
    id: 2,
    question: 'Running Story (Comming)',
  },
  {
    id: 3,
    question: '20-questions (Comming)',
  },
  {
    id: 4,
    question: 'Ngẫu nhiên',
  },
];


const ItemChoose = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => replace(SCREEN_NAME.ROOM_GAME_SCREEN)}
      style={styles.wrapItem}>
      <Text style={styles.titleQuestion}>{item?.question || ''}</Text>
    </TouchableOpacity>
  );
};

const ChooseAction = () => {
  const navigation = useNavigation();
  function renderHeader() {
    return (
      <GlobalHeader
        iconLeft={<BackIcon />}
        titleStyle={{...Fonts.BeVietnamProSemiBold}}
        onPressLeft={() => navigation.goBack()}
      />
    );
  }
  function renderQuestion() {
    return <Text style={styles.title}>Lựa chọn hoạt động</Text>;
  }

  function renderItem({item, index}) {
    return <ItemChoose item={item} />;
  }
  function renderSpe() {
    return <View style={{height: 20}} />;
  }
  function renderBody() {
    return (
      <FlatList
        contentContainerStyle={{marginTop: ratioW(61)}}
        ItemSeparatorComponent={renderSpe}
        data={arrAction}
        renderItem={renderItem}
        bounces={false}
      />
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.body}>
        {renderQuestion()}
        {renderBody()}
      </View>
    </View>
  );
};

export default ChooseAction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonColors.white,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(24),
    lineHeight: Platform.OS === 'ios' ? undefined : ratioW(30),
    marginTop: ratioW(50),
  },
  wrapItem: {
    width: CommonSize.srcWidth - 64,
    height: ratioW(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BFBFBF40',
  },
  titleQuestion: {
    ...Fonts.BeVietnamProSemiBold,
    fontSize: ratioW(16),
  },
});
