import styled from "styled-components";
import { BaseButtonSty, GoogleSignInSty, InvertedSty } from "../button/button.styles";

const CartDropdownContainerSty = styled.div`
position: absolute;
width: 240px;
height: 340px;
scroll-behavior: smooth;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;

${BaseButtonSty},
${GoogleSignInSty},
${InvertedSty} {
  margin-top: auto;
}
`

const CartItemsSty = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`

const EmpatyMessageSty = styled.span`
font-size: 18px;
    margin: 50px auto;

`
export { CartDropdownContainerSty, CartItemsSty, EmpatyMessageSty };
