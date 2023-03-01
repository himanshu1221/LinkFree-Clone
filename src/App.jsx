import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="m-4">
      <Profile/>
        <div className="flex justify-content-center align-item-center">
          <div className="flex flex-column">
        <Button className="p-3 mb-2">
          <i className="pi pi-twitter px-2"></i>
          <span className="px-2">Twitter</span>
        </Button>
        <Button className="p-3">
          <i className="pi pi-twitter px-2"></i>
          <span className="px-2">Twitter</span>
        </Button>
        </div>
        </div>
    </div>
  );
}

export default App;
