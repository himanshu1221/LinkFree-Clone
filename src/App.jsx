import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="m-4">
      <div className="flex justify-content-center align-item-center">
        <Avatar className="p-overlay-badge" shape="circle" size="xlarge" image="himanshu.jpg">
          <Badge value="4" />
        </Avatar>
      </div>
      <div className="flex justify-content-center align-item-center">
        <p>Web Developer</p>
      </div>
    </div>
  );
}

export default App;
