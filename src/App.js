import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";

function App() {
  return (
    <div className="container text-center">
      <h1>Welcome to IoT Mushroom Farm</h1>
      <div
        className="row"
        style={{ padding: "45px", border: "10px sold dark" }}
      >
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
      </div>
    </div>
  );
}

export default App;
