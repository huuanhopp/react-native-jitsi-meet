import React from 'react';
import {Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = props => {
  if (props?.onPress) {
    return (
      <Pressable activeOpacity={1} onPress={props?.onPress}>
        <MaskedView maskElement={<Text {...props} />}>
          <LinearGradient
            colors={props.colors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text {...props} style={[props.style, {opacity: 0}]} />
          </LinearGradient>
        </MaskedView>
      </Pressable>
    );
  }
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
