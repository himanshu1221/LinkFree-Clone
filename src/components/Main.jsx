import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import Links from "./Links";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";

const Main = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState({
    name: "404",
    bio: "Profile Not found",
    avatar:
      "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg",
    links: [],
  });
  useEffect(() => {
    fetch(`/data/${username}.json`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="m-4">
        <Profile
          name={profile.name}
          bio={profile.bio}
          avatar={profile.avatar}
          total={profile.links.length}
        />
        <Links links={profile.links} icon={profile.icon} />
      </div>
    </div>
  );
};

export default Main;
