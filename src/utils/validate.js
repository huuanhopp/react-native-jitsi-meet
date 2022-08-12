export const validateUserName = (text) => {
  if (text.length === 0) {
    return 'Bạn chưa nhập thông tin tài khoản!';
  } else if (text.length < 9 || text.length > 18 || !isValid(text)) {
    return 'Số điện thoại không hợp lệ!';
  }
  return '';
};

export const validatePhone = (text) => {
  if (text.length === 0) {
    return 'Bạn chưa nhập SĐT';
  } else {
    text = text.replace(/\s/g, '').replace(/\+84/g, '0');
    text = text.slice(0, 2) === '84' ? text.replace('84', '0') : text;
    if (!text.match(/^\d{10,12}$/) || text.charAt(0) !== '0') {
      return 'Số điện thoại chưa hợp lệ'
    }
  }
  return ''
};

export function isVietnamesePhoneNumberValid(number) {
    return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
}

export const validateEmail = (text) => {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.length === 0) {
    return 'Bạn chưa nhập email'
  } else if (!text.match(mailFormat) || /[-_]/.test(text)) {
    return 'Sai định dạng email';
  }
  return '';
};
export const isValid = (str) => {
  return !/[~`!#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?]/g.test(str);
}

export const checkNull = (text) => {
  if (text.length === 0) {
    return 'Bạn chưa nhập đủ thông tin!';
  }
  return '';
};

export const checkRePass = (pass, rePass) => {
  if (pass !== rePass) {
    return 'Mật khẩu không khớp!';
  }
  return '';
};
