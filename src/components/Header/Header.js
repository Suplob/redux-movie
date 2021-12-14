import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useProvideAuth from "../../lib/auth";
import "./Header.scss";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  const { user, signOut } = useProvideAuth();
  const [control, setControl] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (control && ref.current && !ref.current.contains(e.target)) {
        setControl(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [control]);

  return (
    <Navbar className="header">
      <Container>
        <Link to="/" className="default-link">
          <Navbar.Brand href="#home" className="text-white">
            Watch<span className="text-blue">Movie</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img
              src={user?.photoUrl}
              alt="user"
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => setControl((control) => !control)}
            />
          </Navbar.Text>
          {control && (
            <div
              style={{
                width: "100px",
                height: "35 px",
                background: "white",
                borderRadius: "3px",
                position: "fixed",
                top: "30px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
              ref={ref}
            >
              <p className="modal-item" onClick={signOut}>
                Logout
              </p>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
