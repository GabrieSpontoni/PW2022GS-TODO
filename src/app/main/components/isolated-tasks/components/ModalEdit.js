import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getDatabase, ref, update } from "firebase/database";

import useAuth from "../../../../../hook/auth";

export default function ModalEdit({
  showModal,
  handleCloseModal,
  handleShowModal,
  editTask,
}) {
  const { user, loading } = useAuth();
  const [amountTags, setAmountTags] = useState(1);
  const db = getDatabase();

  const [form, setForm] = useState({
    tarefa: "",
    tempo_limite: "",
    tags: [],
    status: "",
  });

  useEffect(() => {
    if (editTask) {
      console.log(editTask);
      setForm({
        tarefa: editTask.editTask.tarefa,
        tempo_limite: editTask.editTask.tempo_limite,
        tags: editTask.editTask.tags,
        status: editTask.editTask.status,
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    console.log(form);

    const updateData = form;
    const updates = {};
    updates[`usuarios/${user.uid}/tarefas_isoladas/${editTask.key}`] =
      updateData;
    update(ref(db), updates)
      .then(() => {
        console.log("ok");
      })
      .catch(() => {
        console.log("erro");
      });

    e.preventDefault();
  };

  const increaseAmountTags = () => {
    setAmountTags(amountTags + 1);
  };

  const decreaseAmountTags = () => {
    if (amountTags > 1) {
      setAmountTags(amountTags - 1);
      setForm({
        ...form,
        tags: form.tags.slice(0, -1),
      });
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
                    <button
                      onClick={increaseAmountTags}
                      type="button"
                      className="btn btn-outline-success btn-sm"
                    >
                      +
                    </button>{" "}
                    {amountTags} Tag(s){" "}
                    <button
                      onClick={decreaseAmountTags}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      -
                    </button>{" "}
                    {editTask.editTask.tags.map((tag, index) => (
                      <Form.Label
                        key={index}
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        {tag.cor}
                      </Form.Label>
                    ))}
                  </Form.Label>

                  {Array.from(Array(amountTags)).map((_, index) => (
                    <Form.Control
                      key={index}
                      as="select"
                      onChange={(e) => {
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
                      <option>Azul</option>
                      <option>Vermelho</option>
                      <option>Verde</option>
                      <option>Laranja</option>
                    </Form.Control>
                  ))}
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
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
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
