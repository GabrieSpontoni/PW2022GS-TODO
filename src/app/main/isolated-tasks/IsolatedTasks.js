import Sidebar from "../shared/sidebar/Sidebar";
import Navbar from "../shared/navbar/Navbar";
import Content from "../shared/content/Content";
export default function IsolatedTasks() {
  return (
    <div>
      <div
        style={{
          display: "flex",
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
          <Content />
        </div>
      </div>
    </div>
  );
}
