import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {CommonColors, Fonts} from '@utils/CommomStyles';
import {ratioW} from '@utils';

const TimeCountDown = React.forwardRef(({onEnd}, ref) => {
  const [time, setTime] = useState(10);
  const intervalTimeout = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      onStart: handleStart,
    }),
    [],
  );

  useEffect(() => {
    if (time === 0) {
      onEnd && onEnd();
    }
  }, [time]);

  function handleStart() {
    clearTimeout(intervalTimeout.current);
    intervalTimeout.current = setInterval(() => {
      setTime(prevState => Math.max(0, prevState - 1));
    }, 1000);
  }
  return (
    <Text style={styles.titleReady}>
      Bạn chơi đã sẵn sàng, hoạt động sẽ tự động bắt đầu sau
      <Text style={{color: CommonColors.jade_green}}> {time}s</Text>
    </Text>
  );
});

export default TimeCountDown;

const styles = StyleSheet.create({
  titleReady: {
    ...Fonts.BeVietnamProSemiBold,
    width: ratioW(307),
    textAlign: 'center',
    marginTop: ratioW(47),
    fontSize: ratioW(24),
    color: CommonColors.blue1,
  },
});
