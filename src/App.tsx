import { useState } from 'react'
//import './css/main.css'
import './sass/main.scss'
import Header from './header/Header'
import MainComponent from './main/MainComponent'
import AsideNav from './aside/AsideNav'

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  function clickMenu(evt: React.MouseEvent<HTMLElement>) {
    console.log(evt.target)
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className="App">
      <AsideNav expand={toggleMenu} />
      <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
        <Header click={clickMenu} toggle={toggleMenu} />
        <MainComponent />
      </div>
    </div>
  )
}

export default App
