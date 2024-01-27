import React from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
      <Logo>
        <span>
          <GiCandleFlame />
        </span>
        <h1>Portfolio</h1>
      </Logo>
      <Nav>
        <span>
          <a href="#">Home</a>
        </span>
        <span>
          <a href="#">Services</a>
        </span>
        <span>
          <a href="#">Projects</a>
        </span>
        <span>
          <a href="#">Testimonials</a>
        </span>
        <span>
          <a href="#">Portfolio</a>
        </span>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding:1.5rem 0 ;




`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
span{
    font-size: ;
}
`;
const Nav = styled.div``;
