import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function IconLightClub({strokeColor, ...props}) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_5068_55514)">
        <Path
          d="M7.312 13.883l3.304 3.304m8.248-11.55l-.707.706M21.5 12h-1m-1.636 6.364l-.707-.707M6.843 6.343l-.707-.707M12.5 4V3m-5 9a5 5 0 115 5h-.774a3.374 3.374 0 00-2.386.988l-.376.376a2 2 0 11-2.828-2.828l.376-.376a3.376 3.376 0 00.988-2.386V12z"
          stroke={strokeColor || '#BFBFBF'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5068_55514">
          <Path transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconLightClub;
