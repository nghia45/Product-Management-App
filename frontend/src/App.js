import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import AppRouter from "./AppRouter";
import {AuthContext} from "./context/AuthContex.js"
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
