import { useState, useEffect } from 'react'
import * as Realm from 'realm-web'
//import './css/main.css'
import './sass/main.scss'
import { useContext } from 'react'
import Header from './header/Header'
import MainComponent from './main/MainComponent'
import AsideNav from './aside/AsideNav'
import { ContentProvider } from './context/ContentContext'
import { DataContext } from './context/Context'
import Data from './assets/data.json'
import { DataTypes } from './context/Types'

function App() {
  const { theme } = useContext(DataContext)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [data, setData] = useState(Data)
  const [docs, setDocs] = useState([{}])

  function clickMenu() {
    setToggleMenu(!toggleMenu)
  }

  function handleBtnAddDoc(evt: React.MouseEvent<HTMLElement>) {
    console.log(evt)
    const docObject: DataTypes = {
      name: "document12",
      content: "# new document",
      createdAt: "15-10-2022"
    }
    setData(data.concat(docObject))
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  /*
  useEffect(() => {
    const fetchData = async () => {    
      const app = new Realm.App({ id: "browser-docs-ioemy" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allDocs = await user.functions.getAllDocs()
        setDocs(await allDocs)
        console.log(docs)  
      } catch (err) {        
        console.error(err);
      }
    }
    fetchData()
  }, [])
*/

  return (
    <div className={`app ${toggleMenu ? "app-max-height" : ""} ${theme ? "light-mode" : ""}`}>
      <ContentProvider>
        <AsideNav expand={toggleMenu} data={data} handleAdd={handleBtnAddDoc} />
        <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
          <Header click={clickMenu} toggle={toggleMenu} data={data} />
          <MainComponent data={data} />
        </div>
      </ContentProvider>
    </div>
  )
}

export default App
