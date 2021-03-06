import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #FFF;
    color: #000;
    height:100%;
    
}
html,body, #root{
height:100%;
display: flex;
flex-direction: column;
}

& .rs-sidenav-item{
    padding:8px 0 8px 50px !important;
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400;
    font-size: 14px !important;
}
& .rs-grid-container-fluid {
    padding: 0 !important;
}

& .rs-navbar-default{
    background-color: #FFFFFF !important;
}
& .poppins {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #000;
}
`;
export default GlobalStyle;
