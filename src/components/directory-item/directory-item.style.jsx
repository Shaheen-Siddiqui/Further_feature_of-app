import styled from "styled-components";

const BodySty = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background-color: white;
opacity: 0.7;
position: absolute;

h2 {font-weight: bold;
margin: 0 6px 0;
font-size: 22px;
text-transform: capitalize;
color: #4a4a4a;}

  p {font-weight: lighter;
    color:black;
  font-size: 16px;}`


const BackgroungImageSty = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
background-image: ${({imageUrl})=> `url(${imageUrl})`};
 `

const DirectoryItemContainerSty = styled.div`
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;

&:hover {
cursor: pointer;

& ${BackgroungImageSty} {
transform: scale(1.1);
transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

& ${BodySty} {
opacity: 0.9;
  }
}


&:first-child {
margin-right: 7.5px;
}

&:last-child {
margin-left: 7.5px;
}
`

export { DirectoryItemContainerSty, BackgroungImageSty, BodySty }