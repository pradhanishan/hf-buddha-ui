import { FC } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import { toogleDarkMode } from "../stores/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "../hooks/rtk";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { SiFsecure } from "react-icons/si";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <SiFsecure className="mx-3" />
            Secure PHI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? classes["active-header-nav"]
                    : classes["header-nav"]
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? classes["active-header-nav"]
                    : classes["header-nav"]
                }
              >
                About
              </NavLink>
            </Nav>
            <Form className="d-flex">
              {theme.darkMode ? (
                <BsFillSunFill size={32} color="#FED049" className="mx-3" />
              ) : (
                <BsMoonFill size={32} color="#F3EFE0" className="mx-3" />
              )}
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
                checked={!theme.darkMode}
                onChange={() => {
                  dispatch(toogleDarkMode());
                }}
              />
              {/* <Button
                variant={theme.darkMode?""}
                onClick={() => {
                  dispatch(toogleDarkMode());
                }}
              >
                Toogle Mode
              </Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
