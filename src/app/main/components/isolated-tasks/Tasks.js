import styles from "./Tasks.module.css";

export default function Tasks() {
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
            <input type="text" className="form-control" />
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Buscar mãe no mercado</th>
                <td>20/05/2021</td>
                <td>
                  <div>
                    <span className="badge bg-danger">Danger</span>
                    <span className="badge bg-warning text-dark">Warning</span>
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
                    <span className="badge bg-warning text-dark">Warning</span>
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
                    <span className="badge bg-warning text-dark">Warning</span>
                  </div>
                </td>
                <td>Atrasado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
