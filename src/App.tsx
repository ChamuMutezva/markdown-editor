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

function App() {
  const { theme } = useContext(DataContext)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [docs, setDocs] = useState([{}])

  function clickMenu() {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const fetchData = async () => {
      // setFetchStatus("loading")
      const app = new Realm.App({ id: "browser-docs-ioemy" });
      const credentials = Realm.Credentials.anonymous();

      try {
        const user = await app.logIn(credentials);
        const allDocs = await user.functions.getAllDocs()
        setDocs(await allDocs)
        console.log(docs)
        // setProducts(await allProducts)
        // setFetchStatus("success")

      } catch (err) {
        // setError(err)
        // setFetchStatus("error")
        console.error(err);
      }
    }

    fetchData()

  }, [])

  return (
    <div className={`app ${toggleMenu ? "app-max-height" : ""} ${theme ? "light-mode" : ""}`}>
      <ContentProvider>
        <AsideNav expand={toggleMenu} data={Data} />
        <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
          <Header click={clickMenu} toggle={toggleMenu} data={Data} />
          <MainComponent data={Data} />
        </div>
      </ContentProvider>
    </div>
  )
}

export default App
