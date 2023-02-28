import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";

function App() {
  return (
    <div className="m-4">
      <div className="flex justify-content-center align-item-center">
        <Avatar
          className="p-overlay-badge"
          shape="circle"
          size="xlarge"
          image="himanshu.jpg"
        >
          <Badge value="4" />
        </Avatar>
        </div>
      <div className="flex justify-content-center align-item-center">
        <p>Web Developer</p>
      </div>
        <div className="flex flex-column justify-content-center align-item-center">
        <Button className="p-3">
          <i className="pi pi-twitter px-2"></i>
          <span className="px-2">Twitter</span>
        </Button>
        <Button className="p-3">
          <i className="pi pi-twitter px-2"></i>
          <span className="px-2">Twitter</span>
        </Button>
        </div>
    </div>
  );
}

export default App;
