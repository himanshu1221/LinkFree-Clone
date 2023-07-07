import React from 'react'
import SearchBar from './SearchBar'
import './navbar.css'

export const Navbar = () => {
  const [visible, setVisible] = React.useState(false)
  const [widthScreen, setWidthScreen] = React.useState(window.innerWidth)
  const [searchResults, setSearchResults] = React.useState([])

  let darkMode = localStorage.getItem('darkMode')

  const enableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.add('darkmode')

    //update darkmode in the localstorage
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.remove('darkmode')

    //update darkmode in the localstorage
    localStorage.setItem('darkMode', null)
  }

  if (darkMode === 'enabled') {
    enableDarkMode()
  }

  const darkModeToggle = () => {
    darkMode = localStorage.getItem('darkMode')

    if (darkMode !== 'enabled') {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }

  const handleSearch = (searchTerm) => {
    window.open(
      `https://linkfree-clone.vercel.app/${searchTerm}`,
      '_blank',
      'noreferrer'
    )
  }

  const toggleShowBar = () => setVisible(!visible)

  const handleResize = () => {
    setWidthScreen(window.innerWidth)
  }

  React.useEffect(() => {
    if (visible) {
      setVisible(false)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [widthScreen])

  return (
    <ul className='parent_nav' style={{ background: '#1a1a1b' }}>
      {!visible ? (
        <>
          {widthScreen > 434 ? <SearchBar onSearch={handleSearch} /> : ''}
          <ul
            className='links'
            style={{ listStyle: 'none', background: '#1a1a1b' }}
          >
            <a href='https://linkfree.eddiehub.io/events'>
              <li>Events</li>
            </a>
            <a href='https://linkfree.eddiehub.io/map'>
              <li>Map</li>
            </a>
            <a href='https://linkfree.eddiehub.io/docs'>
              <li>Docs</li>
            </a>
          </ul>
        </>
      ) : (
        <ul
          className='links_view_mobile'
          style={{
            listStyle: 'none',
            background: '#000d21',
            maxHeight: '202px',
            marginBottom: '5px',
          }}
        >
          <hr></hr>
          <SearchBar onSearch={handleSearch} />
          <a href='https://linkfree.eddiehub.io/events'>
            <li>Events</li>
          </a>
          <a href='https://linkfree.eddiehub.io/map'>
            <li>Map</li>
          </a>
          <a href='https://linkfree.eddiehub.io/docs'>
            <li>Docs</li>
          </a>
        </ul>
      )}
      <a className='button' onClick={toggleShowBar}>
        <li style={{ listStyle: 'none' }}>
          <span className='pi pi-bars' style={{ fontSize: '20px' }}></span>
        </li>
      </a>

      <img
        src='https://cdn-icons-png.flaticon.com/128/2130/2130631.png'
        alt='mode'
        className='darkmodeBtn'
        onClick={darkModeToggle}
        style={
          widthScreen > 690 ? { marginTop: '3.5px' } : { marginBottom: '4px' }
        }
      />
    </ul>
  )
}
