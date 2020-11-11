
import React from 'react';
import { FaBars } from 'react-icons/fa';

import {Nav, NavbarContainer, Column, MenuToogle} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Column>
                        <MenuToogle>
                            <FaBars/>
                        </MenuToogle>
                        <MenuToogle>
                        <p>Header left</p>
                        </MenuToogle>
                       
                    </Column>
                    <Column>
                        <p>Header Right</p>
                    </Column>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;