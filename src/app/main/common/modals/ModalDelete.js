import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getDatabase, ref, remove } from "firebase/database";

import useAuth from "../../../../hook/auth";

export default function ModalEdit({
  showModal,
  handleCloseModal,
  handleShowModal,
  deleteTask,
  path,
}) {
  const { user, loading } = useAuth();

  const db = getDatabase();

  const handleDelete = (e) => {
    switch (path) {
      case "tarefas_isoladas":
        remove(
          ref(db, `usuarios/${user.uid}/tarefas_isoladas/${deleteTask.key}`)
        )
          .then(() => {
            handleCloseModal();
          })
          .catch(() => {
            console.log("erro");
          });
        break;
      case "tarefas_listas":
        if (deleteTask.key && deleteTask.deleteTask) {
          remove(
            ref(
              db,
              `usuarios/${user.uid}/tarefas_listas/${deleteTask.keyList}/tarefas/${deleteTask.key}`
            )
          )
            .then(() => {
              handleCloseModal();
            })
            .catch(() => {
              console.log("erro");
            });

          //remove lista inteira
        } else {
          remove(
            ref(db, `usuarios/${user.uid}/tarefas_listas/${deleteTask.keyList}`)
          )
            .then(() => {
              handleCloseModal();
            })
            .catch(() => {
              console.log("erro");
            });
        }
        break;
    }
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Deletar</Modal.Title>
          </Modal.Header>

          <Modal.Body>A operação não pode ser desfeita</Modal.Body>
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
