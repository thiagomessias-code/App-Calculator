import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}


body {
    font-family: 'RobotoMono', monospace;
    
    color: #fff;
    padding: 2rem;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    
    background: linear-gradient(to right,rgb(35, 37, 38),rgb(65, 67, 69) );
}


`;