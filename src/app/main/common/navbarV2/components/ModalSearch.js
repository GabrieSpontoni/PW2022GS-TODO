import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import useAuth from "../../../../../hook/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export default function ModalSearch({
  showModal,
  handleCloseModal,
  handleShowModal,
}) {
  const { user } = useAuth();
  const [isolatedTasks, setIsolatedTasks] = useState({});
  const [listTasks, setListTasks] = useState({});
  const [wordToSearch, setWordToSearch] = useState("");

  const handleSubmit = (e) => {
    handleShowModal();
    setWordToSearch(e.target[0].value);
    const dbRef = ref(getDatabase());
    const isolatedTasks = [];
    const listTasks = [];
    get(child(dbRef, `usuarios/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setIsolatedTasks(data.tarefas_isoladas);
          setListTasks(data.tarefas_listas);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };
  return (
    <div>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Pesquisar"
          aria-label="Search"
          required
        />
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Buscar Tarefas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(isolatedTasks).map((keyTask) => (
            <div key={keyTask}>
              {isolatedTasks[keyTask].tarefa.includes(wordToSearch) && (
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {isolatedTasks[keyTask].tarefa}
                    </h5>

                    <a href="/isolated-tasks" className="card-link">
                      Tarefas isoladas
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          {Object.keys(listTasks).map((keyList) => (
            <div key={keyList}>
              {Object.keys(listTasks[keyList].tarefas).map((keyTask) => (
                <div key={keyTask}>
                  {listTasks[keyList].tarefas[keyTask].tarefa.includes(
                    wordToSearch
                  ) && (
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          {listTasks[keyList].tarefas[keyTask].tarefa}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {listTasks[keyList].nome}
                        </h6>

                        <a href="/list-tasks" className="card-link">
                          Lista de tarefas
                        </a>
                      </div>
                    </div>

                    // <div>
                    //   <h4>Popover in a modal</h4>
                    //   <a className="nav-link" href="/list-tasks">
                    //     {listTasks[keyList].tarefas[keyTask].tarefa}
                    //   </a>
                    // </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
