import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbar/Navbar";
import LisTasks from "../components/list-tasks/ListTasks";
export default function ListTasks() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
        }}
      >
        <Navbar />
        <hr />
        <LisTasks />
      </div>
    </div>
  );
}
