import React from "react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";

function Profile() {
  return (
    <>
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
    </>
  );
}

export default Profile;
