import React from 'react';
import {View, StyleSheet} from 'react-native';
import ItemSuggest from '@screens/club-tab/components/ItemSuggest';

const Suggest = ({suggests}) => {
  return (
    <View style={styles.suggestContainer}>
      {suggests.map((value, index) => {
        return (
          <ItemSuggest
            containerStyle={[
              index < suggests.length - 1 ? {marginRight: 8} : {},
              {marginTop: 8},
            ]}
            title={value}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  suggestContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 35,
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
