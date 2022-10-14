import { useState } from 'react'
//import './css/main.css'
import './sass/main.scss'
import { useContext } from 'react'
import Header from './header/Header'
import MainComponent from './main/MainComponent'
import AsideNav from './aside/AsideNav'
import { ContentProvider } from './context/ContentContext'
import { DataContext } from './context/Context'
import Data from './assets/data.json'

function App() {
  const { theme } = useContext(DataContext)
  const [toggleMenu, setToggleMenu] = useState(false)

  function clickMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className={`app ${toggleMenu ? "app-max-height" : ""} ${theme ? "light-mode" : ""}`}>
      <ContentProvider>
        <AsideNav expand={toggleMenu} data={Data} />
        <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
          <Header click={clickMenu} toggle={toggleMenu} data={Data} />
          <MainComponent data={Data}/>
        </div>
      </ContentProvider>
    </div>
  )
}

export default App
