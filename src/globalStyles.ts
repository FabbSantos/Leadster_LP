import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle<React.CSSProperties>`
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}  
body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: "Plus_Jakarta_Sans", sans-serif;
  }
`;
 
export default GlobalStyle;