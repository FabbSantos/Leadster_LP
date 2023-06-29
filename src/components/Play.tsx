import styled from 'styled-components';

export const Play: React.FC = () => (
    <Svg>
        <Path />
    </Svg>
);

const Svg = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 49 56',
    fill: 'none',
    width: '49',
    height: '56',
})`
    fill: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: opacity .5s ease;
    transform: translate(-50%, -50%);
    font-size: 2em;
    color: white;
    background: transparent;
    border: none;
    opacity: 0;
`;

const Path = styled.path.attrs({
    d:"M0.313635 4.67527C0.313635 1.59607 3.64697 -0.328429 6.31363 1.21117L46.8136 24.5939C49.4803 26.1335 49.4803 29.9825 46.8136 31.5221L6.31363 54.9047C3.64697 56.4443 0.313636 54.5198 0.313636 51.4406L0.313635 4.67527Z"
})``;
