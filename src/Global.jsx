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
    
    background: linear-gradient(to right,rgb(61, 126, 170) ,rgb(255, 228, 122) );
    
}


`;