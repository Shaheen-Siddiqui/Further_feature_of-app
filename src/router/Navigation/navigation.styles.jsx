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

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;

//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//     }
//   }
// }
