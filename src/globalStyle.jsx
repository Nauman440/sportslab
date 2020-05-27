import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body {
     font-family: ${(props) => props.theme.h_font} !important;
     color: #333 !important;
     overflow-x:hidden !important;
 }

 h1 {
     font-family: ${(props) => props.theme.bold_san} !important;
     color: #fff !important;
     font-weight:900 !important;   
 }

 h2{
    font-family: ${(props) => props.theme.bold_san} !important;
    color: ${(props) => props.theme.mahroon} !important;
    font-weight:600 !important;  
    font-size:24px !important;
 }

 h3 {
    font-family: ${(props) => props.theme.bold_san} !important;
    color: #fff !important;
    font-weight:600 !important;  
    font-size:22px !important;
 }
`;


export default GlobalStyles;
