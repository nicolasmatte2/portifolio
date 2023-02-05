import styled from "styled-components";


export const Header = styled.div`
  margin: auto;
  width: 50%;
  height: 50vh;
  background-color: #D48E49;
  border: 0.4rem solid #d7d8d7  ;
  border-radius: 0.2rem;
  
  `
export const DarkModeButton = styled.div`
padding-top: 10px;

`

export const PomodoroClock = styled.div`
text-align: center;
color: white;
background-color: black;
`
export const Quadro = styled.div`

`
export const Button = styled.button`
font-size: 13px;
width: fit-content;
border-radius: 0.8rem;
border-color: transparent;
padding: 10px;
margin: 20px 0 0 8px;
border: 0;
  button:hover{
    background-color: #D48E49;
    transform: scale(3px);
  }

`
export const ButtonDiv = styled.div`

` 
export const Pomodoro = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: red;
margin: 1rem 0 0 1rem;
width: 8rem;
height: 8rem;
border-radius: 2rem;

`
export const Painel = styled.h1`
display: flex;
font-family: 'Noto Sans Symbols 2', sans-serif;
background-color: #9CA144;
border: 2px solid #2E2E2E;
width: 90px;
margin: 1rem 0 0 0;
height: fit-content;
align-items: center;
justify-content: center

 ;
`