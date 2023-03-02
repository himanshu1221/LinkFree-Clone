import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import Links from "./components/Links";
import { Navbar } from "./components/Navbar";

function App() {
  const [profile,setProfile] = useState({
    name:"404",
    bio:"------",
    avatar:"https://github.com/himanshu1221.png",
    links : [],
  });
  useEffect(()=>{
    fetch("/data/himanshu1221.json")
    .then((response)=>response.json())
    .then((data)=>setProfile(data));
  },[]);
  return (
    <>
    <Navbar/>
    <div className="m-4">
      <Profile name={profile.name} bio={profile.bio} avatar={profile.avatar} total = {profile.links.length}/>
      <Links links={profile.links} icon = {profile.icon}/>
    </div>
    </>
  );
}

export default App;
