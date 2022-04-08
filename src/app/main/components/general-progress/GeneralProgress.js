import styles from "./GeneralProgress.module.css";

export default function GeneralProgress() {
  return (
    <div>
      <div className={styles.container}>
        <h3 className="mb-2 text-muted">Andamento Geral</h3>
      </div>

      <div>
        <div className={styles.container}>
          <label className="form-label mb-2 text-muted">
            Tarefas Pendentes
          </label>
          <div className="table-reponsive">
            <table className="table table-warning">
              <thead>
                <tr>
                  <th scope="col">Tarefa</th>
                  <th scope="col">Tempo limite</th>
                  <th scope="col">Tags</th>
                  <th scope="col">Lista</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Buscar mãe no mercado</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td>Concluído</td>
                </tr>
                <tr>
                  <th scope="row">Comprar presente para irmão</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td> - </td>
                </tr>
                <tr>
                  <th scope="row">Visitar vovó</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td> progWeb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.container}>
          <label className="form-label mb-2 text-muted">
            Tarefas Concluídas
          </label>
          <div className="table-reponsive">
            <table className="table table-success">
              <thead>
                <tr>
                  <th scope="col">Tarefa</th>
                  <th scope="col">Tempo limite</th>
                  <th scope="col">Tags</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Buscar mãe no mercado</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td>Concluído</td>
                </tr>
                <tr>
                  <th scope="row">Comprar presente para irmão</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td>Não concluído</td>
                </tr>
                <tr>
                  <th scope="row">Visitar vovó</th>
                  <td>20/05/2021</td>
                  <td>
                    <div>
                      <span className="badge bg-danger">Danger</span>
                      <span className="badge bg-warning text-dark">
                        Warning
                      </span>
                    </div>
                  </td>
                  <td>Atrasado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
