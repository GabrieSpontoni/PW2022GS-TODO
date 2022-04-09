import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getDatabase, ref, update } from "firebase/database";

import useAuth from "../../../../hook/auth";

export default function ModalEdit({
  showModal,
  handleCloseModal,
  handleShowModal,
  editTask,
  path,
}) {
  const { user, loading } = useAuth();
  const [errorForm, setErrorForm] = useState({
    errorTags: false,
  });
  const db = getDatabase();

  const [form, setForm] = useState({
    tarefa: "",
    tempo_limite: "",
    tags: [
      {
        tag: "",
        cor: "",
      },
    ],
    status: "",
  });

  useEffect(() => {
    if (editTask) {
      setForm({
        tarefa: editTask.editTask.tarefa,
        tempo_limite: editTask.editTask.tempo_limite,
        tags: editTask.editTask.tags,
        status: editTask.editTask.status,
      });

      // switch (path) {
      //   case "tarefas_isoladas":
      //     setForm({
      //       tarefa: editTask.editTask.tarefa,
      //       tempo_limite: editTask.editTask.tempo_limite,
      //       tags: editTask.editTask.tags,
      //       status: editTask.editTask.status,
      //     });
      //     break;
      //   case "tarefas_listas":
      //     console.log("entrou");
      //     setForm({
      //       tarefa: editTask.editTask.tarefa,
      //       tempo_limite: editTask.editTask.tempo_limite,
      //       tags: editTask.editTask.tags,
      //       status: editTask.editTask.status,
      //     });
      // }
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    if (form.tags.length === 0) {
      setErrorForm({
        ...errorForm,
        errorTags: true,
      });
      console.log("erro");
    } else {
      const updateData = form;
      const updates = {};

      switch (path) {
        case "tarefas_isoladas":
          updates[`usuarios/${user.uid}/tarefas_isoladas/${editTask.key}`] =
            updateData;
          break;
        case "tarefas_listas":
          updates[
            `usuarios/${user.uid}/tarefas_listas/${editTask.keyList}/tarefas/${editTask.key}`
          ] = updateData;
          break;
        default:
          break;
      }

      update(ref(db), updates)
        .then(() => {
          handleCloseModal();
          console.log("ok");
        })
        .catch(() => {
          console.log("erro");
        });
    }

    e.preventDefault();
  };

  // const getPath = () => {
  //   switch (path) {
  //     case "tarefas_isoladas":
  //       return editTask.editTask.tarefa;

  //     case "tarefas_listas":
  //       return editTask.editTask.tarefa;
  //     default:
  //       return "";
  //   }
  // };

  const getColorBtn = (color) => {
    switch (color) {
      case "branco":
        return "btn btn-outline-dark";
      case "azul":
        return "btn btn-outline-primary";
      case "verde":
        return "btn btn-outline-success";
      case "amarelo":
        return "btn btn-outline-warning";
      case "vermelho":
        return "btn btn-outline-danger";
    }
  };
  return (
    <div>
      {editTask && (
        <div>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Editar Tarefa</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tarefa</Form.Label>
                  <Form.Control
                    defaultValue={editTask.editTask.tarefa}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        tarefa: e.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tempo limite</Form.Label>
                  <Form.Control
                    type="date"
                    defaultValue={editTask.editTask.tempo_limite}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        tempo_limite: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Tags :{" "}
                    {form.tags.map((tag, index) => (
                      <Form.Label
                        key={index}
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        <button
                          type="button"
                          className={getColorBtn(tag.cor)}
                          onClick={() => {
                            const tagsArray = form.tags;
                            tagsArray.splice(index, 1);
                            setForm({
                              ...form,
                              tags: tagsArray,
                            });
                          }}
                        >
                          {tag.cor}
                        </button>
                      </Form.Label>
                    ))}
                  </Form.Label>

                  <Form.Control
                    as="select"
                    onChange={(e) => {
                      setErrorForm({
                        ...errorForm,
                        errorTags: false,
                      });
                      if (
                        !form.tags.some((tag) => tag.cor === e.target.value)
                      ) {
                        setForm({
                          ...form,
                          tags: [
                            ...form.tags,
                            {
                              tag: " ",
                              cor: e.target.value,
                            },
                          ],
                        });
                      }
                    }}
                  >
                    <option>-</option>
                    <option>azul</option>
                    <option>vermelho</option>
                    <option>verde</option>
                    <option>amarelo</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={editTask.editTask.status}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        status: e.target.value,
                      });
                    }}
                  />
                </Form.Group>

                {errorForm.errorTags && (
                  <div className="alert alert-danger" role="alert">
                    Selecione pelo menos uma tag
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleCloseModal();
                  }}
                >
                  Close
                </Button>
                <Button type="submit">Save </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      )}
    </div>
  );
}
