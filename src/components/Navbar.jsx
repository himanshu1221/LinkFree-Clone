import React from 'react';

import './navbar.css';

export const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);

  const toggleShowBar = () => setVisible(!visible);

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
  }

  React.useEffect(() => {
    if (visible) {
      setVisible(false)
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);

  return (
    <ul className='parent_nav' style={{ background: "#000d21" }}>
      {!visible ?
        (
          <ul className='links' style={{ listStyle: "none", background: "#000d21" }}>
            <a href="https://linkfree.eddiehub.io/search"><li>Search</li></a>
            <a href="https://linkfree.eddiehub.io/events"><li>Events</li></a>
            <a href="https://linkfree.eddiehub.io/map"><li>Map</li></a>
            <a href="https://linkfree.eddiehub.io/docs"><li>Docs</li></a>
          </ul>
        ) :
        (
          <ul className='links_view_mobile' style={{ listStyle: "none", background: "#000d21" }}>
            <hr></hr>
            <a href="https://linkfree.eddiehub.io/search"><li>Search</li></a>
            <a href="https://linkfree.eddiehub.io/events"><li>Events</li></a>
            <a href="https://linkfree.eddiehub.io/map"><li>Map</li></a>
            <a href="https://linkfree.eddiehub.io/docs"><li>Docs</li></a>
          </ul>
        )
      }
      <a className='button' onClick={toggleShowBar}>
        <li style={{ listStyle: "none" }}>
          <span className="pi pi-bars" style={{ fontSize: '20px' }}></span>
        </li>
      </a>
    </ul>
  )
}
