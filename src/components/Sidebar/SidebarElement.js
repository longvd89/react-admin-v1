import styled from "styled-components";

export  const SidebarContainer = styled.div`
    display:flex;
    min-height: 100vh;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    width: 250px;
    z-index: 1001;
    background: #556ee6;
    bottom: 0;
    margin-top: 0;
    // position: fixed;
    top: 0px;
    box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
    
    @media screen and (max-width: 1360px){
      width: 80px;
      transition: all 0.3s ease-in-out;
    }
`;