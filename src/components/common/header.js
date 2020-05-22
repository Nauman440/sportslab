import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/menu-logo.png';


const Nav = styled.nav`
box-shadow: 1px 7px 10px #888;
`;

const LogoWrapper = styled.div`
  width:40% !important;
`;

const Navbar = styled.div`
.nav-item {
  padding-right:40px !important;
  font-family: ${(props) => props.theme.light_san} !important;
  color:#333 !important;
}
`;

const Header = () => (
  <Nav className="navbar navbar-expand-lg navbar-light bg-white">
    <LogoWrapper className="d-flex justify-content-center">
      <img src={logo} alt=" Logo added" width="50%" />
    </LogoWrapper>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <Navbar className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">
          INICIO
          {' '}
          <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/about">DESCRIPCION</Link>
        <Link className="nav-item nav-link" to="/services">MODO DE USO</Link>
        <Link className="nav-item nav-link " to="/">CONTACTENOS</Link>
      </Navbar>
    </div>
  </Nav>
);


export default Header;
