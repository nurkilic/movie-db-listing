import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavPanel from "./pages/NavPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavPanel />
      </BrowserRouter>
    </>
  );
}

export default App;
