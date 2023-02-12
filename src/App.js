import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="flex justify-content-center align-item-center">
      <Avatar className="p-overlay-badge" shape="circle" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} icon="pi pi-user" size="xlarge" image="himanshu.jpg">
        <Badge value="4" />
      </Avatar>
      <p>Web Developer</p>
    </div>
  );
}

export default App;
