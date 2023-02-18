import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryPreviewContainerSty = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`

const TitleSty = styled(Link)`
font-size: 28px;
margin-bottom: 25px;
cursor: pointer;
`
const PreviewSty = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`

export { CategoryPreviewContainerSty, TitleSty, PreviewSty }