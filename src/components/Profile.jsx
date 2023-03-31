import React from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

function Profile({name , bio , avatar,total}) {
  return (
    <>
      <div className="flex justify-content-center align-item-center">
        <Avatar
          className="p-overlay-badge"
          shape="circle"
          size="xlarge"
          image={avatar}
        >
          <Badge value={total} />
        </Avatar>
        <h1 className="ml-5 mt-3" style={{color: "var(--exampleBtn)"}}>{name}</h1>
      </div>
      <div className="flex justify-content-center align-item-center">
        <p style={{color: "var(--exampleBtn)"}}>{bio}</p>
      </div>
    </>
  );
}

export default Profile;
