import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbarV2/Navbar";
import Tasks from "../components/isolated-tasks/Tasks";
export default function IsolatedTasks() {
  return (
    <div>
      <Navbar />
      <hr />
      <Tasks />
    </div>
  );
}
