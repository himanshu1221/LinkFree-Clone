import React from "react";
import { Button } from "primereact/button";
function Links({links}) {
  const colors = {
    twitter:" #00acee",
    linkedin : "white",
    github: "black"
  };
  return (
    <div>
      <div className="flex justify-content-center align-item-center">
        <div className="flex flex-column" style={{ width: 70 + "%" }}>
          {links.map((link)=>
          <Button className="p-3 mb-2" style={{color:colors[link.icon],background:"#36454F",border:"none"}}>
            <i className={`pi pi-${link.icon} px-2`}></i>
            <span className="px-2" style={{color:"white"}}>{link.name}</span>
          </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Links;
