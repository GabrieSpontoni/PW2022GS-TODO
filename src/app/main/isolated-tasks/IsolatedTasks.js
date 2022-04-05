import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbar/Navbar";
import Tasks from "../components/isolated-tasks/Tasks";
export default function IsolatedTasks() {
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
          paddingLeft: "20px",
        }}
      >
        <Navbar />
        <hr />
        <Tasks />
      </div>
    </div>
  );
}
