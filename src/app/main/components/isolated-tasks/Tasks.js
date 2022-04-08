import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Tasks.module.css";
import useAuth from "../../../../hook/auth";
import ModalEdit from "./components/ModalEdit";

export default function Tasks() {
  const { user, loading } = useAuth();
  const db = getDatabase();

  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [allTasks, setAllTasks] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      onValue(
        ref(db, "usuarios/" + user.uid + "/tarefas_isoladas"),
        (snapshot) => {
          if (snapshot.val()) {
            setAllTasks(snapshot.val());
          }
        }
      );
    }
  }, [user, loading]);

  const addTask = () => {
    const db = getDatabase();
    const isolatedTasksRef = ref(
      db,
      "usuarios/" + user.uid + "/tarefas_isoladas"
    );
    const newIsolatedTaskRef = push(isolatedTasksRef);
    set(newIsolatedTaskRef, {
      tarefa: newTask,
      tempo_limite: "-",
      tags: [
        {
          tag: "",
          cor: "",
        },
      ],
      status: "nao_concluido",
    })
      .then(() => {
        console.log("ok");
      })
      .catch(() => {
        console.log("erro");
      });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (editTask, key) => {
    setEditTask({
      key,
      editTask,
    });
    setShowModal(true);
  };
  return (
    <div>
      <div className={styles.container}>
        <h3 className="mb-2 text-muted">Tarefas isoladas</h3>
      </div>
      <div className={styles.container}>
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label mb-2 text-muted"
            >
              Nova tarefa
            </label>

            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
              <div>
                <button
                  onClick={addTask}
                  type="button"
                  className="btn btn-success"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.container}>
        <label className="form-label mb-2 text-muted">Tarefas</label>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tarefa</th>
                <th scope="col">Tempo limite</th>
                <th scope="col">Tags</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {allTasks &&
                Object.keys(allTasks).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{allTasks[key].tarefa}</td>
                      <td>{allTasks[key].data_conclusão}</td>
                      <td>
                        {allTasks[key].tags.map((tag, index) => {
                          return (
                            <span
                              key={index}
                              style={{
                                backgroundColor: tag.cor,
                                padding: "5px",
                                margin: "5px",
                              }}
                            >
                              {tag.tag}
                            </span>
                          );
                        })}
                      </td>
                      <td>{allTasks[key].status}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleShowModal(allTasks[key], key);
                          }}
                          type="button"
                          className="btn btn-warning"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>{" "}
                        <button type="button" className="btn btn-danger">
                          <FontAwesomeIcon icon={faDeleteLeft} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <ModalEdit
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleShowModal={handleShowModal}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
