import {Dimensions, Platform} from 'react-native';
import {isIphoneX, ratioH, ratioW} from '@utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export class Fonts {
  static BeVietnamProBold = {
    fontFamily: 'BeVietnamPro-Bold',
  };
  static BeVietnamProLight = {
    fontFamily: 'BeVietnamPro-Light',
  };
  static BeVietnamProMedium = {
    fontFamily: 'BeVietnamPro-Medium',
  };
  static BeVietnamProRegular = {
    fontFamily: 'BeVietnamPro-Regular',
  };
  static BeVietnamProSemiBold = {
    fontFamily: 'BeVietnamPro-SemiBold',
  };
}
export class CommonColors {
  static transparent = 'transparent';

  static blue = '#3973BF';
  static blue1 = '#253255';
  static blue2 = '#65819B';

  static yellow6 = '#FFF9F3';
  static yellow = '#FFD610';
  static yellow2 = '#FFCC00';
  static yellow4 = '#FFCD4E';
  static yellow5 = '#FFB801';

  static green = '#34C659';
  static green2 = '#F5FCF7';
  static green3 = '#00C041';
  static green4 = '#18B168';
  static green5 = '#2BB857';
  static green6 = '#8CC24A';
  static green7 = '#F2FFE7';
  static green8 = '#008446';
  static green9 = 'rgba(36, 208, 163, 0.1)';

  static red = '#FF9D97';
  static red1 = '#F65C45';
  static red2 = '#FFF5F5';
  static red3 = '#FF3B30';
  static red4 = '#EF4C36';
  static red5 = '#EB5757';
  static red6 = 'rgba(235, 87, 87, 0.8)';
  static red7 = '#FF7448';
  static red8 = '#FEEFEC';
  static red9 = '#FF6847';
  static red10 = '#D84B4B';

  static momo = '#AE2070';

  static orange = '#FF9500';
  static orange4 = '#FF7B01';
  static orange3 = '#FF7A00';
  static orange5 = '#FFF2E6';
  static orange6 = 'rgb(255, 249, 244)';
  static orange7 = '#FFA24D';

  static shadowText = '#4A4A4A';
  static shadowText2 = '#909090';
  static shadowText3 = 'rgba(0, 0, 0, 0.4)';

  static jade_green = '#1CB6AC';
  static jade_green1 = '#24D0A3';
  static jade_green2 = '#169C94';
  static jade_green3 = '#E9FAF6';

  static white = '#ffffff';
  static white1 = '#F2F4F9';
  static white3 = '#FFF2E6';
  static white4 = '#D3D6DD';
  static white2 = '#F2F2F2';
  static white_02 = 'rgba(255,255,255,0.2)';
  static peri = '#2C1167';
  static peri3 = '#440E97';
  static peri4 = '#BFAAFF';
  static peri5 = '#8055FF';
  static peri6 = '#A080FF';
  static peri7 = '#8055FF';
  static peri8 = '#DFD5FF';
  static peri9 = 'rgba(0,0,0,0.2)';
  static peri10 = 'rgba(0,0,0,0.4)';
  static theme1 = '#1cb6ac';
  static theme2 = 'rgba(36, 208, 163, 1)';
  static theme3 = '#8DDAD6';
  static theme4 = '#E8F8F7';
  static dark1 = 'rgba(37, 50, 85, 1)';

  static gray1 = '#404040';
  static gray2 = '#1A1A1A';
  static gray13 = '#D3D6DD';
  static peri_pink = '#F9F7FF';
  static peri_pink2 = '#F2EEFF';
  static peri_pink3 = '#ECE5FF';
  static peri_pink4 = '#E6DDFF';
  static B_W = '#BFBFBF';
  static silver = '#F2F2F2';
  static gray3 = '#F9F9F9';
  static gray4 = '#808080';
  static gray5 = '#777E90';
  static gray6 = '#99999950';
  static gray7 = '#EFEFEF';
  static gray8 = '#909090';
  static gray9 = '#4A4A4A';
  static gray10 = 'rgba(37, 50, 85, 0.5)';
  static gray11 = '#9299AA';
  static gray12 = '#666F88';
  static gray13 = '#999999';
  static gray14 = 'rgba(199, 211, 219, 0.35)';

  static purple = '#634F9D';
  static purple1 = '#BFAAFF';
  static purple2 = '#4000FF';
  static purple3 = '#8055FF';
  static White05 = 'rgba(255,255,255,0.5)';
  static border = 'rgba(191, 191, 191, 0.25)';
  static BW = 'rgba(191, 191, 191, 1)';
  static BW20 = 'rgba(191, 191, 191, 0.2)';
  static BW25 = 'rgba(191, 191, 191, 0.25)';
  static text_color_level_current = 'rgba(128,85,255,1)';

  static borderLevelContent = '#F9F7FF';
  static onboarding_progressbar_start = '#BFAAFF';
  static onboarding_progressbar_end = '#8055FF';

  static onboarding_shadow_checkpoint = 'rgba(54, 16, 166, 0.4)';

  static onboarding_stage_btn_start = 'rgba(108,60,250,0)';
  static onboarding_stage_btn_end = 'rgba(108,60,250,1)';

  static Text_vocabulary = '#808080';
  static shadow = 'rgba(54, 16, 166, 0.4)';
  static shadow2 = 'rgba(26, 26, 26, 0.5)';
  static shadow4 = 'rgba(44, 17, 103, 0.33)';
  static shadow3 = '#D1D1D7';
  static shadow5 = '#D3D3D3';
  static shadow6 = 'rgba(242, 242, 242, 0.5)';
  static borderInput = '#BFBFBF';

  static black = '#000000';
  static black1 = 'rgba(0, 0, 0, 0.2)';
  static back2 = 'rgba(0, 0, 0, 0.6)';

  static B_W1 = 'rgba(191, 191, 191, 0.5)';

  static orange1 = '#FFE4BF';
}

export class CommonSize {
  static srcWidth = Dimensions.get('window').width;

  static srcHeight = Dimensions.get('window').height;

  static paddingTopHeader =
    Platform.OS === 'ios' ? (isIphoneX() ? ratioH(34) : ratioH(20)) : 0;

  static paddingBottom = isIphoneX() ? ratioW(20) : 0;

  static heightBottomWithoutIphoneX =
    Platform.OS === 'ios' ? (isIphoneX() ? 0 : ratioW(20)) : ratioW(20);

  static heightTopWithoutIphoneX =
    Platform.OS === 'ios' ? (isIphoneX() ? 0 : ratioH(34)) : ratioH(34);

  static bottomTabHeight = CommonSize.paddingBottom + ratioW(63);
  static isPortrait =
    Dimensions.get('screen').height >= Dimensions.get('screen').width;
}

export const navPadding = () => {
  return useSafeAreaInsets().top;
};

export const hitSlop = {
  bottom: 10,
  left: 10,
  right: 10,
  top: 10,
};
