import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  update,
} from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faLock } from "@fortawesome/free-solid-svg-icons";

import useAuth from "../../../../../../../src/hook/auth";
import Spinner from "../../../../common/spinner/Spinner";

export default function PrivateTasks() {
  const { user, loading } = useAuth();
  const db = getDatabase();

  const [allLists, setAllLists] = useState(null);
  const [loadingLists, setLoadingLists] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (user && !loading) {
      onValue(
        ref(db, "usuarios/" + user.uid + "/tarefas_listas"),
        (snapshot) => {
          if (isMounted) {
            if (snapshot.val()) {
              setAllLists(snapshot.val());
              setLoadingLists(false);
            } else {
              setAllLists(null);
              setLoadingLists(false);
            }
          }
        }
      );
    }
    return () => {
      isMounted = false;
    };
  }, [user, loading]);

  const handleShare = (listId) => {
    set(ref(db, "compartilhados/listas/" + listId), {
      dados_lista: allLists[listId],
      dados_usuario: {
        usuario_nome: user.displayName,
        usuario_email: user.email,
        usuario_uid: user.uid,
      },
    });

    update(ref(db, "usuarios/" + user.uid + "/tarefas_listas/" + listId), {
      compartilhada: true,
    });
  };

  const handleUnshare = (listId) => {
    set(ref(db, "compartilhados/listas/" + listId), null);
    update(ref(db, "usuarios/" + user.uid + "/tarefas_listas/" + listId), {
      compartilhada: false,
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

  const getColorRow = (status) => {
    switch (status) {
      case "nao_concluido":
        return "table-danger";
      case "concluido":
        return "table-success";
    }
  };
  return (
    <div>
      {loadingLists && <Spinner />}

      {!loadingLists && (
        <div>
          <div>
            {allLists &&
              Object.keys(allLists).map((key) => {
                return (
                  <div key={key} className="card">
                    <h5 className="card-header text-muted text-center">
                      {allLists[key].nome}{" "}
                      {!allLists[key].compartilhada && (
                        <button
                          onClick={() => {
                            handleShare(key);
                            // setIsForEditList({
                            //   isForEditList: true,
                            //   listId: key,
                            // });
                          }}
                          type="button"
                          className="btn btn-success"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Compartilhar"
                        >
                          <FontAwesomeIcon icon={faShare} />
                        </button>
                      )}
                      {allLists[key].compartilhada && (
                        <button
                          onClick={() => {
                            handleUnshare(key);
                            // setIsForEditList({
                            //   isForEditList: true,
                            //   listId: key,
                            // });
                          }}
                          type="button"
                          className="btn btn-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Descompartilhar"
                        >
                          <FontAwesomeIcon icon={faLock} />
                        </button>
                      )}
                    </h5>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tarefa</th>
                            <th scope="col">Tempo limite</th>
                            <th scope="col">Tags</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allLists[key].tarefas &&
                            Object.keys(allLists[key].tarefas).map(
                              (keyTask) => {
                                return (
                                  <tr
                                    key={keyTask}
                                    // className={getColorRow(
                                    //   allLists[key].tarefas[keyTask].status
                                    // )}
                                  >
                                    <td>
                                      {allLists[key].tarefas[keyTask].tarefa}
                                    </td>
                                    <td>
                                      {
                                        allLists[key].tarefas[keyTask]
                                          .tempo_limite
                                      }
                                    </td>
                                    <td>
                                      {allLists[key].tarefas[keyTask].tags.map(
                                        (tag, index) => {
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
                                        }
                                      )}
                                    </td>
                                    <td>
                                      {" "}
                                      {allLists[key].tarefas[keyTask].status}
                                    </td>
                                    <td></td>
                                  </tr>
                                );
                              }
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
