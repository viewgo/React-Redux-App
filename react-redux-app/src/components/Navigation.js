import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

//https://tripsplitr.herokuapp.com/

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: #404b69;
  color: white;
`;

const Title = styled.div`
  // width: 50%;
  font-weight: 700;
  text-align: start;
  padding: 10px 30px;

  @media (max-width: 500px) {
    // display: none;
    width: 50%;
  }

  @media (max-width: 320px) {
    display: none;
  }

  h1 {
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  a {
    color: white;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    // width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }

  div {
    margin: 1rem;
    font-size: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const LogoutLink = styled.div`
  :hover {
    cursor: pointer;
  }
`;

function Navigation(props) {


  return (
    <Header>
      <Title>
        <h1>
          MTG Cards
        </h1>
      </Title>
      <Nav>
        <div>
          <Link to="/">Card List</Link>
        </div>
      </Nav>
    </Header>
  );
}

export default Navigation;
