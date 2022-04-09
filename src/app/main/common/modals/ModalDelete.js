import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getDatabase, ref, remove } from "firebase/database";

import useAuth from "../../../../hook/auth";

export default function ModalEdit({
  showModal,
  handleCloseModal,
  handleShowModal,
  deleteTask,
}) {
  const { user, loading } = useAuth();

  const db = getDatabase();

  const handleDelete = (e) => {
    remove(ref(db, `usuarios/${user.uid}/tarefas_isoladas/${deleteTask.key}`))
      .then(() => {
        handleCloseModal();
      })
      .catch(() => {
        console.log("erro");
      });
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Tarefa</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Deletar a Tarefa? a operação não pode ser desfeita
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleDelete}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
