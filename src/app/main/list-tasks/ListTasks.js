import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbarV2/Navbar";
import LisTasks from "../components/list-tasks/ListTasks";
export default function ListTasks() {
  return (
    <div>
      <Navbar />
      <hr />
      <LisTasks />
    </div>
  );
}
