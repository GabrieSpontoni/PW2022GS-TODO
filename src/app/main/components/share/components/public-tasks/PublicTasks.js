export default function PublicTasks() {
  return (
    <div>
      <div className="card">
        <h5 className="card-header text-muted text-center">
          Estágio (Gabriel Spontoni do Espirito Santo)
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
              <tr>
                <th scope="row">Consertar bug de usuário</th>
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
                <th scope="row">Mudar Layout do login do usuário</th>
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
                <th scope="row">Inserir Vídeo</th>
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

      <div className="card">
        <h5 className="card-header text-muted text-center">
          ProgWeb (Jão Pedro da Silva Lemos)
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
              <tr>
                <th scope="row">Consertar bug de usuário</th>
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
                <th scope="row">Mudar Layout do login do usuário</th>
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
                <th scope="row">Inserir Vídeo</th>
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
