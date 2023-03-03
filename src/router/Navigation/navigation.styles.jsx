import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavigationSty = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`
const NavLinkContainerSty = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`
const NavLinkSty = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`

export { NavigationSty, NavLinkContainerSty, NavLinkSty }
