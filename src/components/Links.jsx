import React from "react";
import { Button } from "primereact/button";
function Links({ links }) {
  const colors = {
    twitter: " #00acee",
    linkedin: "white",
    github: "black",
    youtube: "red",
  };
  return (
    <div>
      <div className="flex justify-content-center align-item-center">
        <div className="flex flex-column" style={{ width: 70 + "%" }}>
          {links.map((link) => (
            <a
              href={link.url}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Button
                className="p-3 mb-3 jutify-content-center align-ite-center"
                style={{
                  color: colors[link.icon],
                  background: "#36454F",
                  border: "none",
                  width: 100 + "%",
                }}
                key={link.url}
                onClick={links.url}
              >
                <i className={`pi pi-${link.icon} px-2`}></i>
                <span className="px-2" style={{ color: "white" }}>
                  {link.name}
                </span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Links;
