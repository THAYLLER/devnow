import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
} from 'reactstrap';

import logo from '../../assets/logo.png';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      color="faded"
      light
      expand="md"
      className="fixed-top navbar-light bg-light"
    >
      <NavbarBrand href="/">
        <Media object src={logo} width="150" alt="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/#inicio">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#sobre">Sobre a Devnow</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#skills">Habilidades Técnicas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#metas">Nossas metas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#portifolio">Cases de sucesso</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://discord.gg/VbhUxa7" target="_blank">
              Suporte
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
