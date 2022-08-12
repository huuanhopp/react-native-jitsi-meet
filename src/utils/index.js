import {Dimensions, Platform, StatusBar} from 'react-native';

import {ERROR_CODES, KEY_XOR_ENCODE, MESSAGE_CODES} from '@utils/Const';

const {width, height} = Dimensions.get('window');

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
};

export const ratioW = _width => {
  return (_width * width) / 375;
};

export const ratioH = _height => {
  return (_height * height) / 812;
};

// set it in splash app
export let GlobalVariable = {
  accessToken: undefined,
  deviceId: undefined,
  isLogout: false,
  fcmToken: null,
  isRegisterNoti: false,
};

export const resetGlobalVariable = () => {
  GlobalVariable = {
    accessToken: undefined,
    deviceId: undefined,
    isLogout: false,
    fcmToken: null,
    isRegisterNoti: false,
  };
};

export const getErrorMessage = code => {
  const errorMessage = MESSAGE_CODES?.[`CODE_${code}`];
  if (!errorMessage) {
    return code;
  }
  return errorMessage;
};

const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const Base64 = {
  btoa: (input: string = '') => {
    let str = input;
    let output = '';

    for (
      let block = 0, charCode, i = 0, map = chars;
      // eslint-disable-next-line no-bitwise
      str.charAt(i | 0) || ((map = '='), i % 1);
      // eslint-disable-next-line no-bitwise
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.",
        );
      }

      // eslint-disable-next-line no-bitwise
      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input: string = '') => {
    let str = input.replace(/[=]+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      // eslint-disable-next-line no-bitwise
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? // eslint-disable-next-line no-bitwise
          (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};

function _base64ToArrayBuffer(base64) {
  let binary_string = Base64.atob(base64);
  let len = binary_string.length;
  let bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

export function nonAccentVietnamese(str) {
  try {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
  } catch (e) {}
  return str;
}

export const formatToArrayLightText = (content, lightWords) => {
  if (!content || !lightWords) {
    return {
      newArrActive: [],
      newFormat: [],
    };
  }
  const handleCheck = text => {
    for (let position = 0; position < lightWords.length; position++) {
      if (lightWords[position].toLowerCase() === text.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  let letters = '';
  let newFormat = [];
  let newArrActive = [];
  let newContent = nonAccentVietnamese(content);
  for (let i = 0; i < newContent.length; i++) {
    let _char = newContent[i].toLowerCase();
    if (
      _char?.charCodeAt(0) >= 'a'?.charCodeAt(0) &&
      _char?.charCodeAt(0) <= 'z'?.charCodeAt(0)
    ) {
      letters += content[i];
    } else {
      if (letters !== '' && handleCheck(letters)) {
        newArrActive.push(newFormat.length + 1);
      }
      newFormat.push(letters);
      newFormat.push(content[i]);
      letters = '';
    }
  }
  if (letters !== '') {
    newFormat.push(letters);
    if (handleCheck(letters)) {
      newArrActive.push(newFormat.length);
    }
  }
  return {
    newArrActive: newArrActive,
    newFormat: newFormat,
  };
};

export function shuffle(a) {
  if (a && a?.length > 0) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  return [];
}

export const formatSecondToMinute = second => {
  let minutes = parseInt(second / 60) % 60;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = Math.round(second % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const handleLogout = () => {
  // store.dispatch(logoutUser());
  // messaging()
  //   .unsubscribeFromTopic('alluser_' + getTopicENV())
  //   .then(() => console.log('Unsubscribed to topic'));
  //
  // setRoot(SCREEN_NAME.START_SCREEN);
  // GlobalVariable.accessToken = undefined;
};

export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const getNavPadding = () => {
  if (isIphoneX()) {
    return ratioW(30);
  } else if (
    Platform.OS === 'ios' &&
    Dimensions.get('window').height / Dimensions.get('window').width > 1.75
  ) {
    return ratioW(15);
  }
  return ratioW.currentHeight;
};

export const convertLevel = level => {
  if (level === 'A1' || level === 'A2') {
    return {
      level: 'Dễ',
      color: 'rgba(0, 132, 70, 0.8)',
    };
  } else if (level === 'B1' || level === 'B2') {
    return {
      level: 'Vừa',
      color: 'rgba(255, 175, 20, 0.8)',
    };
  } else {
    return {
      level: 'Khó',
      color: 'rgba(231, 59, 48, 0.8)',
    };
  }
};

export const youTubeIdFromLink = url => {
  console.log(
    url.match(
      /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/,
    )[1],
  );
  return url.match(
    /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/,
  )[1];
};

export const checkLockProduct = data => {
  if (!GlobalVariable.accessToken) {
    return data?.is_lock_login;
  }
  return data?.is_lock_product;
};

export const checkTimeProduct = data => {
  let isExpiry = false;
  Object.keys(data).forEach(function (key) {
    if (typeof data?.[key] === 'number' && data?.[key] > 0) {
      isExpiry = true;
    }
  });
  return isExpiry;
};

export const formatSecondToCountDown = second => {
  let minutes = parseInt(second / 60);
  let hour = parseInt(minutes / 60);
  minutes = minutes % 60;
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = Math.round(second % 60);
  return `${hour}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const formatSecondToMunite = second => {
  let minutes = parseInt(second / 60);
  let seconds = Math.round(second % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export function hasNotch() {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight > 24;
  }
  return false;
}

export function replaceAll(str, match, replacement) {
  return str.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement);
}

export function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function tronLog(data) {
  if (__DEV__) {
    return console.tron.log(data);
  } else {
    return console.log(data);
  }
}

// export function formatMoney(amount) {
//   if (amount) {
//     return (amount?.toLocaleString('en-US') + 'đ').replaceAllCustom(',', '.');
//   }
//   return amount;
// }

export function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function isVideo(url) {
  let newUrl = url?.split('.');
  let typeVideo = ['mp4', 'm3u8', 'avi', 'mpg'];
  let _isVideo = false;
  let afterDot = newUrl?.[newUrl?.length - 1];

  typeVideo?.map(value => {
    if (afterDot?.includes(value)) {
      _isVideo = true;
    }
  });
  return _isVideo;
}
