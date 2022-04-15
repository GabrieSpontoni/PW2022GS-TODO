import { useEffect, useState } from "react";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Tasks.module.css";
import useAuth from "../../../../hook/auth";
import ModalEdit from "../../common/modals/ModalEdit";
import ModalDelete from "../../common/modals/ModalDelete";
import Spinner from "../../common/spinner/Spinner";

export default function Tasks() {
  const { user, loading } = useAuth();
  const db = getDatabase();

  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [deleteTask, setDeleteTask] = useState("");
  const [allTasks, setAllTasks] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [loadingTasks, setLoadingTasks] = useState(true);

  useEffect(() => {
    if (user && !loading) {
      onValue(
        ref(db, "usuarios/" + user.uid + "/tarefas_isoladas"),
        (snapshot) => {
          if (snapshot.val()) {
            setAllTasks(snapshot.val());
            setLoadingTasks(false);
          } else {
            setAllTasks(null);
            setLoadingTasks(false);
          }
        }
      );
    }
  }, [user, loading]);

  const addTask = (e) => {
    e.preventDefault();
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
          cor: "branco",
        },
      ],
      status: "nao_concluido",
    })
      .then(() => {
        document.getElementById("newTask").value = "";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getColorBtn = (color) => {
    switch (color) {
      case "branco":
        return "badge bg-dark";
      case "azul":
        return "badge bg-primary";
      case "verde":
        return "badge bg-success";
      case "amarelo":
        return "badge bg-warning text-dark";
      case "vermelho":
        return "badge bg-danger";
    }
  };
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (editTask, key) => {
    setEditTask({
      key,
      editTask,
    });
    setShowModal(true);
  };

  const handleCloseModalDelete = () => setShowModalDelete(false);
  const handleShowModalDelete = (deleteTask, key) => {
    setDeleteTask({
      key,
      deleteTask,
    });

    setShowModalDelete(true);
  };
  return (
    <div>
      {loadingTasks && <Spinner />}

      {!loadingTasks && (
        <div>
          <div className={styles.container}>
            <h3 className="mb-2 text-muted">Tarefas isoladas</h3>
          </div>
          <div className={styles.container}>
            <form onSubmit={addTask}>
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
                    id="newTask"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setNewTask(e.target.value);
                    }}
                  />
                  <div>
                    <button type="submit" className="btn btn-success">
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
                          <td>{allTasks[key].tempo_limite}</td>
                          <td>
                            {allTasks[key].tags.map((tag, index) => {
                              return (
                                <span
                                  key={index}
                                  className={getColorBtn(tag.cor)}
                                  style={{
                                    marginRight: "5px",
                                  }}
                                >
                                  {tag.cor}
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
                            <button
                              onClick={() => {
                                handleShowModalDelete(allTasks[key], key);
                              }}
                              type="button"
                              className="btn btn-danger"
                            >
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
              path="tarefas_isoladas"
            />
          </div>

          <div>
            <ModalDelete
              showModal={showModalDelete}
              handleCloseModal={handleCloseModalDelete}
              handleShowModal={handleShowModalDelete}
              deleteTask={deleteTask}
              path="tarefas_isoladas"
            />
          </div>
        </div>
      )}
    </div>
  );
}
