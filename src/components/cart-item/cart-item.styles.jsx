import styled from "styled-components";

const CartItemContainerSty = styled.div`
width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`
const ItemDetailsSty = styled.div`

width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;
`
const NameSty = styled.strong`
font-size: 16px;
`
export { CartItemContainerSty, ItemDetailsSty, NameSty };
