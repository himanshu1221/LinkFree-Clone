import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:username" element={<><Main /></>}></Route>
      </Routes>
    </>
  );
}

export default App;
