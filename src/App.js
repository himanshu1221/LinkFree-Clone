import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';


function App() {
  return (
    <div>
      <Avatar className="p-overlay-badge" shape="circle" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} icon="pi pi-user" size="xlarge" image="himanshu.jpg">
        <Badge value="4" />
      </Avatar>
    </div>
  );
}

export default App;
