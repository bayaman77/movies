import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const nav_items = [
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "Movies",
      link: "/movies",
      id: 2,
    },
    {
      title: "Add movie",
      link: "/add",
      id: 3,
    },
  ];
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        {nav_items.map((item, index) => (
          <Link key={index} to={item.link}>
            <Navbar.Brand>{item.title}</Navbar.Brand>
          </Link>
        ))}
      </Navbar>
    </Container>
  );
};

export default Header;
