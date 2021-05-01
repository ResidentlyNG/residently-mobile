import React from 'react';
import Svg, { Circle, Ellipse, G, Mask, Path, Rect } from 'react-native-svg';

export const MainIcon = (props) => (
  <Svg
    width={35}
    height={41}
    viewBox="0 0 35 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.065 12.334L22.881 2.235a7.696 7.696 0 00-10.845 0l-10.184 10.1C.662 13.525 0 15.181 0 16.903v16.854c0 3.444 2.612 6.259 5.853 6.259h23.211c3.24 0 5.853-2.782 5.853-6.259V16.904a6.61 6.61 0 00-1.852-4.57zM16.202 33.66H8.961c-2.216 0-4.001-1.92-4.001-4.272v-11.49c0-1.192.463-2.317 1.29-3.112l6.976-6.954a5.328 5.328 0 012.976-1.49V33.66zm13.722-4.238c0 2.35-1.785 4.271-4 4.271h-7.407V6.308a5.454 5.454 0 013.174 1.49l6.977 6.92a4.44 4.44 0 011.29 3.113v11.59h-.034z"
      fill={props.fill || '#fff'}
    />
  </Svg>
);

export const ForwardIcon = (props) => (
  <Svg
    width={26}
    height={18}
    viewBox="0 0 26 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 9.643V8.357c0-.355.291-.643.65-.643h21.021l-5.785-5.71a.64.64 0 010-.914l.923-.9a.653.653 0 01.923 0l7.982 7.884a.96.96 0 01.286.682v.488a.985.985 0 01-.286.682l-7.982 7.884a.654.654 0 01-.923 0l-.923-.913a.627.627 0 010-.9l5.785-5.71H.65A.647.647 0 010 9.642z"
      fill="#0842C8"
    />
  </Svg>
);

export const User = (props) => (
  <Svg
    width={16}
    height={19}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.245 5.868a3.666 3.666 0 013.673-3.66 3.677 3.677 0 013.675 3.66 3.667 3.667 0 01-3.675 3.664 3.666 3.666 0 01-3.673-3.664z"
      fill="#fff"
    />
    <Path
      opacity={0.457}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.464 5.984c0 3.069 2.434 5.55 5.44 5.55 3.01 0 5.445-2.482 5.445-5.55-.008-3.06-2.438-5.538-5.445-5.546-3.006 0-5.44 2.482-5.44 5.546z"
      fill="#00C894"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.641 5.984c0 1.842 1.46 3.331 3.264 3.331 1.806 0 3.267-1.49 3.267-3.33-.005-1.837-1.463-3.323-3.267-3.328-1.803 0-3.264 1.489-3.264 3.327z"
      fill="#00C995"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={10}
      width={16}
      height={9}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.572 10.488h14.67v7.866H.571v-7.866z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.825 11.546a8.401 8.401 0 00-3.253 3.243v.41c.061.108.126.218.19.324a10.364 10.364 0 005.096 2.63l.866.134a10.386 10.386 0 008.33-2.767c.064-.106.126-.213.187-.322v-.409a8.373 8.373 0 00-1.089-1.525 8.415 8.415 0 00-10.327-1.718z"
        fill="#00C894"
      />
    </G>
  </Svg>
);

export const Eye = (props) => (
  <Svg
    width={17}
    height={13}
    viewBox="0 0 17 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.755 7.77a1.212 1.212 0 01-1.212-1.209 1.212 1.212 0 012.424 0c0 .667-.543 1.21-1.212 1.21zm0-4.03A2.828 2.828 0 005.927 6.56a2.828 2.828 0 005.657 0A2.828 2.828 0 008.755 3.74zm.177 7.03c-3.458.089-5.714-3.21-6.463-4.482.824-1.438 2.9-4.382 6.11-4.473 3.445-.098 5.713 3.21 6.462 4.481-.823 1.438-2.9 4.382-6.11 4.473zm7.798-4.923c-.516-.996-3.364-5.99-8.193-5.822C4.069.151 1.47 4.513.78 5.847a.98.98 0 000 .891c.508.983 3.256 5.825 7.994 5.825.066 0 .133-.001.199-.003 4.467-.126 7.066-4.488 7.756-5.822a.984.984 0 000-.891z"
      fill="#8BE6CE"
    />
    <Ellipse cx={8.755} cy={6.292} rx={3.592} ry={3.583} fill="#00C995" />
  </Svg>
);

export const Mail = (props) => (
  <Svg
    width={17}
    height={15}
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={1} width={15} height={14} rx={2} fill="#8BE6CE" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.45 2.7L8.92 6.498a.85.85 0 01-.84 0L2.55 2.7h11.9zm0-1.7H2.55A2.553 2.553 0 000 3.55v8.5a2.553 2.553 0 002.55 2.55h11.9A2.553 2.553 0 0017 12.05v-8.5A2.553 2.553 0 0014.45 1z"
      fill="#00C894"
    />
  </Svg>
);

export const MiniForwardChevrolet = (props) => (
  <Svg
    width={4}
    height={7}
    viewBox="0 0 4 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.147 6.516a.494.494 0 01-.3-.1.407.407 0 01-.06-.607L2.89 3.495.862 1.185A.407.407 0 01.933.578a.5.5 0 01.662.065l2.269 2.585c.14.16.138.389-.005.546l-2.35 2.586a.488.488 0 01-.362.155z"
      fill="#fff"
    />
  </Svg>
);

export const SearchIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.383 12.767a6.382 6.382 0 003.71-1.196l3.935 3.935a.941.941 0 00.673.274c.54 0 .93-.415.93-.946a.914.914 0 00-.266-.665l-3.91-3.918a6.358 6.358 0 001.312-3.868C12.767 2.873 9.895 0 6.383 0 2.863 0 0 2.872 0 6.383c0 3.512 2.864 6.384 6.383 6.384zm0-1.378c-2.747 0-5.005-2.266-5.005-5.006 0-2.739 2.258-5.005 5.005-5.005 2.74 0 5.006 2.266 5.006 5.005 0 2.74-2.266 5.006-5.006 5.006z"
      fill="#8E8E93"
      opacity={0.4}
    />
  </Svg>
);

export const Check = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.184 2.974a.551.551 0 01.78.78l-3.31 3.309a.551.551 0 01-.78 0L2.038 5.225a.551.551 0 01.78-.78l1.448 1.448 2.919-2.919z"
      fill="#fff"
    />
  </Svg>
);

export const HomeSvg = (props) => (
  <Svg
    width={17}
    height={18}
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.476.255l6.788 6.956c.323.331.507.794.507 1.27v7.39c0 .973-.745 1.764-1.662 1.764h-2.74v-7.94a.881.881 0 00-.88-.883H6.204a.881.881 0 00-.88.882v7.941h-2.74c-.916 0-1.663-.791-1.663-1.765V8.48c0-.475.185-.938.506-1.268L8.218.255a.905.905 0 011.258 0zm1.133 16.498H7.087v-6.176h3.522v6.176z"
      fill="#00C894"
    />
  </Svg>
);

export const NotificationsSvg = (props) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.255 13.89c0 .764-.777 1.41-1.697 1.41s-1.697-.646-1.697-1.41v-.29h3.394v.29zm5.531-2.664l-1.528-1.532V5.896c0-2.96-2.122-5.472-4.938-5.846a5.697 5.697 0 00-4.51 1.366 5.727 5.727 0 00-1.954 4.302v3.976l-1.527 1.533a1.388 1.388 0 00-.3 1.515c.216.521.719.858 1.282.858h2.853v.29c0 1.716 1.522 3.11 3.393 3.11 1.872 0 3.394-1.394 3.394-3.11v-.29h2.852c.563 0 1.066-.336 1.282-.858a1.39 1.39 0 00-.299-1.516z"
      fill="#E0E0E0"
    />
  </Svg>
);

export const WalletSvg = (props) => (
  <Svg
    width={19}
    height={15}
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.715 1.837L13.6.024c1.046-.175 1.983.638 1.983 1.7v.57L3.82 3.63c-.508.057-.511.776 0 .776h12.587c.946 0 1.718.774 1.718 1.722v6.47c0 .985-.806 1.793-1.79 1.793H2.715c-.985 0-1.79-.807-1.79-1.794V3.631c0-.987.818-1.632 1.79-1.794zM14.72 8.084c.725 0 1.313.588 1.313 1.315a1.314 1.314 0 11-2.626 0c0-.727.587-1.315 1.313-1.315z"
      fill="#E0E0E0"
    />
  </Svg>
);

export const ProfileSvg = (props) => (
  <Svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Ellipse cx={10.906} cy={10} rx={9.98} ry={10} fill="#E0E0E0" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.95 7.2a2.2 2.2 0 01-2.196 2.2 2.2 2.2 0 010-4.4 2.2 2.2 0 012.195 2.2zm1.647 7.149a.55.55 0 01-.549.55H7.463a.55.55 0 01-.55-.55 3.85 3.85 0 013.842-3.85 3.85 3.85 0 013.842 3.85z"
      fill="#fff"
    />
  </Svg>
);

export const MenuIcon = (props) => (
  <Svg
    width={21}
    height={16}
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.644 3.168h13.278c.497 0 .9-.547.9-1.22 0-.675-.403-1.221-.9-1.221H6.644c-.497 0-.9.546-.9 1.22 0 .674.403 1.22.9 1.22zM19.595 6.83H1.499c-.677 0-1.227.546-1.227 1.22 0 .673.55 1.22 1.227 1.22h18.096c.677 0 1.227-.547 1.227-1.22 0-.674-.55-1.22-1.227-1.22zM19.921 12.83H6.644c-.497 0-.9.547-.9 1.22 0 .674.403 1.221.9 1.221h13.278c.497 0 .9-.547.9-1.22 0-.674-.403-1.22-.9-1.22z"
      fill="#00C995"
    />
  </Svg>
);

export const DottedPlus = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={16}
      cy={16}
      r={15.5}
      stroke="#00C995"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.875 14.375h-2.25v-2.25c0-.619-.506-1.125-1.125-1.125s-1.125.506-1.125 1.125v2.25h-2.25c-.619 0-1.125.506-1.125 1.125s.506 1.125 1.125 1.125h2.25v2.25c0 .619.506 1.125 1.125 1.125s1.125-.506 1.125-1.125v-2.25h2.25c.619 0 1.125-.506 1.125-1.125s-.506-1.125-1.125-1.125z"
      fill="#00C995"
    />
  </Svg>
);

export const MailSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.006 6l-6.505 4.468a1 1 0 01-.99 0L5.006 6h14zm0-2h-14c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3z"
      fill="#C0CCDA" // "#231F20"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={21}
      height={16}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.006 6l-6.505 4.468a1 1 0 01-.99 0L5.006 6h14zm0-2h-14c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#C0CCDA" d="M0 0h24v24H0z" />
    </G>
  </Svg>
);

export const EyeSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm9.868-3.998c-.639-1.112-4.162-6.686-10.139-6.499-5.527.141-8.743 5.011-9.597 6.5a1.005 1.005 0 000 .995C2.762 13.595 6.162 19 12.025 19c.081 0 .163 0 .246-.003 5.527-.14 8.743-5.01 9.597-6.499a1.005 1.005 0 000-.996z"
      fill={props.fill || '#C0CCDA'} // "#00C894"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={16}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm9.868-3.998c-.639-1.112-4.162-6.686-10.139-6.499-5.527.141-8.743 5.011-9.597 6.5a1.005 1.005 0 000 .995C2.762 13.595 6.162 19 12.025 19c.081 0 .163 0 .246-.003 5.527-.14 8.743-5.01 9.597-6.499a1.005 1.005 0 000-.996z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill={props.fill || '#C0CCDA'} d="M0 0h24v24H0z" />
    </G>
  </Svg>
);

export const UserSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4zm3 13a1 1 0 01-1 1H6a1 1 0 01-1-1c0-3.86 3.141-7 7-7s7 3.14 7 7z"
      fill="#C0CCDA"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={5}
      y={3}
      width={14}
      height={18}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4zm3 13a1 1 0 01-1 1H6a1 1 0 01-1-1c0-3.86 3.141-7 7-7s7 3.14 7 7z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#C0CCDA" d="M0 0h24v24H0z" />
    </G>
  </Svg>
);

export const CallSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4 22C8.908 22 2 15.092 2 6.6a4.605 4.605 0 016.09-4.352 1 1 0 01.648.722l1.37 5.964c.075.328-.02.672-.253.916-.137.142-.14.145-1.38.794a9.947 9.947 0 004.88 4.883c.649-1.241.653-1.245.795-1.381.245-.234.59-.325.917-.253l5.964 1.369a1 1 0 01.72.646c.083.236.144.48.185.731A4.605 4.605 0 0117.4 22z"
      fill="#C0CCDA"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={1}
      y={2}
      width={21}
      height={20}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 22C8.908 22 2 15.092 2 6.6a4.605 4.605 0 016.09-4.352 1 1 0 01.648.722l1.37 5.964c.075.328-.02.672-.253.916-.137.142-.14.145-1.38.794a9.947 9.947 0 004.88 4.883c.649-1.241.653-1.245.795-1.381.245-.234.59-.325.917-.253l5.964 1.369a1 1 0 01.72.646c.083.236.144.48.185.731A4.605 4.605 0 0117.4 22z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#C0CCDA" d="M0 0h24v24H0z" />
    </G>
  </Svg>
);

export const ForwardArrow = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.861 6.31l2.862 3c.043.045.064.101.097.151.036.054.079.102.104.162.049.121.076.249.076.377a1.011 1.011 0 01-.294.708l-2.999 2.999a.999.999 0 11-1.414-1.414L11.586 11H6a1 1 0 110-2h5.663l-1.249-1.309a1 1 0 111.447-1.381zM0 10c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10S0 4.486 0 10z"
      fill={props.fill || '#FFF'}
    />
  </Svg>
);

export const NotificationBell = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 18.341c0 .9-.916 1.66-2 1.66s-2-.76-2-1.66v-.34h4v.34zm6.521-3.134l-1.801-1.803V8.936c0-3.48-2.502-6.437-5.821-6.877a6.724 6.724 0 00-5.316 1.607A6.731 6.731 0 005.28 8.727l-.001 4.677-1.8 1.804a1.63 1.63 0 00-.354 1.782c.255.613.848 1.01 1.512 1.01H8v.341c0 2.018 1.794 3.66 4 3.66s4-1.642 4-3.66v-.34h3.362a1.63 1.63 0 001.511-1.01 1.632 1.632 0 00-.352-1.784z"
      fill="#fff"
    />
    <Mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={19}
      height={21}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 18.341c0 .9-.916 1.66-2 1.66s-2-.76-2-1.66v-.34h4v.34zm6.521-3.134l-1.801-1.803V8.936c0-3.48-2.502-6.437-5.821-6.877a6.724 6.724 0 00-5.316 1.607A6.731 6.731 0 005.28 8.727l-.001 4.677-1.8 1.804a1.63 1.63 0 00-.354 1.782c.255.613.848 1.01 1.512 1.01H8v.341c0 2.018 1.794 3.66 4 3.66s4-1.642 4-3.66v-.34h3.362a1.63 1.63 0 001.511-1.01 1.632 1.632 0 00-.352-1.784z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#prefix__a)">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </G>
  </Svg>
);
