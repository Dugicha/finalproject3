import { Outlet } from "react-router-dom";

import "./App.css";
import "./services/Api";
import { Cart } from "./pages/member/pages/Product/components/createcart/ProductCart";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
