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
  left: -12%;
  bottom: -100%;
  z-index: -1;
`;

const Rect = styled.rect.attrs({
  x: '-32.9326',
  y: '582.239',
  width: '870',
  height: '1022',
  rx: '80',
  transform: 'rotate(-45 -32.9326 582.239)',
})``;
