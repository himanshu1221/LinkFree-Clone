import React from "react";
import { Button } from "primereact/button";

function Links({ links, icons }) {
  return (
    <div>
      <div className="flex justify-content-center align-item-center">
        <div className="flex flex-column" style={{ width: 70 + "%" }}>
          {links.map((link) => (
            <a href={link.url} className="link-button">
              <Button className="p-3 mb-2">
                <i className="pi pi-twitter px-2"></i>
                <span className="px-2">{link.name}</span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Links;
