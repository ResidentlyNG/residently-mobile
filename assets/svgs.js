import React from 'react';
import Svg, { Ellipse, G, Mask, Path, Rect } from 'react-native-svg';

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
