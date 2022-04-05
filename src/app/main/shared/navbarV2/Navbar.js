import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../../hook/auth";

export default function Sidebar() {
  const { user, loading, logout } = useAuth();
  const [name, setName] = useState("-");
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(user);
    setName(
      user?.displayName.split(" ")[0] + " " + user?.displayName.split(" ")[1]
    );
  });

  const handleLogout = () => {
    logout();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "10px",
      }}
    >
      <a className="navbar-brand">
        <button
          onClick={handleShow}
          type="button"
          className="btn btn-outline-secondary"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>{" "}
        <FontAwesomeIcon
          className="d-inline-block align-text-top"
          icon={faUser}
        />{" "}
        {name}{" "}
        <button onClick={handleLogout} className="btn btn-outline-danger">
          Sair
        </button>
      </a>

      <Offcanvas
        style={{
          backgroundColor: "red",
        }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TO-DO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/isolated-tasks"
              >
                Tarefas isoladas
              </a>
            </li>
            <hr />
            <li className="nav-item">
              <a className="nav-link" href="/list-tasks">
                Lista de tarefas
              </a>
            </li>
            <hr />
            <li className="nav-item">
              <a className="nav-link" href="/general-progress">
                Andamento geral
              </a>
            </li>
            <hr />
            <li className="nav-item">
              <a className="nav-link" href="#">
                Compartilhar
              </a>
            </li>

            <hr />
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
