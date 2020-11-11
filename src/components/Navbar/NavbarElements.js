
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
    /* max-width:1300px; */
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
    
    @media screen and (max-width: 991px) {
        padding-right: 12px;
        padding-left: 12px;
    }
`;

export const Column = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
`;

export const MenuToogle = styled.div`
    margin-right: 0.5rem;
    display: block;
    padding : 0 1rem;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
`;