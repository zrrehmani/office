import React from "react";
import styled from "styled-components";

export default function Header() {
  const Header = styled.div`
    background-color: #fff;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0px;
  `;
  const Logo = styled.img`
    margin-left: 10em;
    width: 5em;
  `;
  const Nav = styled.nav`
    display: flex;
    flex: 1;
    margin: 0em 20px;
    justify-content: flex-end;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const Nav_i = styled.a`
    color: black;
    margin: 0 20px;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 600;
  `;
  const Button = styled.button`
    background-color: black;
    color: #fff;
    padding: 0.5em 2em;
    margin-right: 10em;
    border: none;
    border-radius: 0.2em;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 0.3em;
  `;
  return (
    <Header className="header">
      <Logo
        className="logo"
        src="https://www.freepnglogos.com/uploads/pics-photos-instagram-logo-png-4.png"
        alt="Netflix Logo"
      />
      <Nav className="Nav">
        <Nav_i className="nav_i" href="#">
          Tools
        </Nav_i>
        <Nav_i className="nav_i" href="#">
          Pricing
        </Nav_i>
        <Nav_i className="nav_i" href="#">
          Sign in
        </Nav_i>
      </Nav>
      <Button>Get Started</Button>
    </Header>
  );
}
