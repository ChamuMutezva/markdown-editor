import { useState } from 'react'
//import './css/main.css'
import './sass/main.scss'
import { useContext } from 'react'
import Header from './header/Header'
import MainComponent from './main/MainComponent'
import AsideNav from './aside/AsideNav'
import { DataContext } from './context/Context'

function App() {
  const { theme } = useContext(DataContext)
  const [toggleMenu, setToggleMenu] = useState(false)
  function clickMenu(evt: React.MouseEvent<HTMLElement>) {
    console.log(evt.target)
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className={`App ${theme ? "light-mode" : ""}`}>
      <AsideNav expand={toggleMenu} />
      <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
        <Header click={clickMenu} toggle={toggleMenu} />
        <MainComponent />
      </div>
    </div>
  )
}

export default App
