
import styled from "styled-components";

export const Nav = styled.nav`
    background: #f86f2f;
    display:flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    z-index: 1001;
    position: sticky;
    top: 0px;
    box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height:70px;
     width:100%;
     max-width:1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
`;