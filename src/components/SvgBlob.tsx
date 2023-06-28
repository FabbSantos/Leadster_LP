import styled from 'styled-components';

export const SvgBlob = () => (
    <Svg>
        <Rect />
    </Svg>
);



const Svg = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 1272 1272',
  fill: 'none',
  width: '1272',
  height: '1272',
})`
  fill: #e6f3ff;
  position: absolute;
  left: -10%;
  bottom: -100%;
  z-index: -2;
`;

const Rect = styled.rect.attrs({
  x: '-32.9326',
  y: '582.239',
  width: '870',
  height: '1022',
  rx: '80',
  transform: 'rotate(-45 -32.9326 582.239)',
})``;


// const Svg = styled.svg.attrs({
//     xmlns: 'http://www.w3.org/2000/svg',
//     viewBox: '0 0 1272 1272',
// })`
//   fill: #F2F9FF;
//   width: 1272px;
//   height: 1272px;
//   position: absolute;
//   left: -10%;
//   bottom: 0%;
//   transform: translateY(100px)
// `;

// const Path = styled.path.attrs({
//     // d: 'M1524.45 723.55C1320.78 448.64 1099.04 29.5 906.98 62.32 733.88 91.9 602.27 447 436.26 735.34c-138.69 240.88-505.04 690.78-290.8 902.83 139.86 138.44 460.78 71.54 865.54 79.75 300.95 6.1 748.4 91.56 876.99-126.19 132.63-224.59-174.48-612.99-363.54-868.18Z',
//     d: `
//     M500,100 Q600,200 700,100
//     L1700,1600 Q1500,1500 1300,1600
//     L300,1600 Q600,1500 700,1600
//     Z
//   `,
// })``;


