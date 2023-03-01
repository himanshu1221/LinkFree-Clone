import React from "react";
import { Button } from "primereact/button";
function Links() {
  return (
    <div>
      <div className="flex justify-content-center align-item-center">
        <div className="flex flex-column" style={{ width: 70 + "%" }}>
          <Button className="p-3 mb-2">
            <i className="pi pi-twitter px-2"></i>
            <span className="px-2">Twitter</span>
          </Button>
          <Button className="p-3 mb-2">
            <i className="pi pi-instagram px-2"></i>
            <span className="px-2">Instagram</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Links;
