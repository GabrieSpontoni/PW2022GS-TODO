import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbar/Navbar";
import ProgressGeneral from "../components/general-progress/GeneralProgress";
export default function GeneralProgress() {
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
        <ProgressGeneral />
      </div>
    </div>
  );
}
