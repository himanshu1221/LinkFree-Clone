import React from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

function Profile({ name, bio, avatar }) {
  return (
    <>
      <div className="flex justify-content-center align-item-center">
        <Avatar
          className="p-overlay-badge"
          shape="circle"
          size="xlarge"
          image={avatar}
        >
          <Badge value="4" />
        </Avatar>
        <h1 className="ml-4">{name}</h1>
      </div>
      <div className="flex justify-content-center align-item-center">
        <p>{bio}</p>
      </div>
    </>
  );
}

export default Profile;
