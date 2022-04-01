import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <h1>TO-DO</h1>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="/isolated-tasks"
          >
            Tarefas isoladas
          </a>
        </li>
        <hr />
        <li className="nav-item">
          <a className="nav-link" href="/isolated-tasks">
            Lista de tarefas
          </a>
        </li>
        <hr />
        <li className="nav-item">
          <a className="nav-link" href="#">
            Andamento geral
          </a>
        </li>
        <hr />
        <li className="nav-item">
          <a className="nav-link" href="#">
            Compartilhar
          </a>
        </li>

        <hr />
      </ul>
    </div>
  );
}
