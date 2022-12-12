import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
// import * as Realm from 'realm-web'
//import './css/main.css'
import './sass/main.scss'
import { useContext } from 'react'
import Header from './header/Header'
import MainComponent from './main/MainComponent'
import AsideNav from './aside/AsideNav'
import ConfirmDelete from './main/ConfirmDelete'
import { ContentContext } from './context/ContentContext'
import { ThemeContext } from './context/ThemeContext'
import Data from './assets/data.json'
import { DataTypes } from './context/Types'
import { API_ENDPOINT_PATH } from './config'

function App() {
  const { theme } = useContext(ThemeContext)
  const { ID } = useContext(ContentContext)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [data, setData] = useState([] as any[])
  const [error, setError] = useState(null)
  // const [docs, setDocs] = useState([{}])

  function clickMenuToggle() {
    setToggleMenu(!toggleMenu)
  }

  function handleDeleteDocument() {
    console.log(ID)
    console.log(data)
    setDeleteModal(!deleteModal)
    if (data !== null) {
      const targetItem = data.find(item => {
        console.log(`name - ${item.name} id - ${ID}`)
      })
    }
    // console.log(targetItem)
  }

  function handleConfirmDelete() {
    console.log("confirm delete button")
    setDeleteModal(!deleteModal)
  }

  function exitWithoutDeleting() {
    console.log("exit without deleting")
    setDeleteModal(!deleteModal)
  }

  const saveNewChanges = async (evt: React.MouseEvent<HTMLElement>) => {
    console.log(evt)
  /*  const response = await fetch(`http://localhost:4000/api/editor/${}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }) */
  }

  const handleBtnAddDoc = async (evt: React.MouseEvent<HTMLElement>) => {
    // create and add new  document 
    console.log(evt)
    const current = new Date()
    const docObject: DataTypes = {
      name: `document ${nanoid()}`,
      content: "# new document",
      createdAt: `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`
    }

    const response = await fetch(`${API_ENDPOINT_PATH}`, {
      method: 'POST',
      body: JSON.stringify(docObject),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setError(null)
      setData(data.concat(docObject))
      console.log("new document added")
    }

  }

  useEffect(() => {
    // load data from mongo db
    const fetchFiles = async () => {
      const response = await fetch(`${API_ENDPOINT_PATH}`)
      const json = await response.json()
      if (response.ok) {
        setData(json)
      }
    }
    console.log(data)
    fetchFiles()
  }, [])

  return (
    <div className={`app ${toggleMenu || deleteModal ? "app-max-height" : ""} ${theme ? "light-mode" : ""}`}>
      {/*when toggleMenu or deleteModal set the app div to a max-height of 100vh to prevent scrolling*/}

      <AsideNav expand={toggleMenu} data={data} handleAdd={handleBtnAddDoc} />
      {data && data.length > 0 ? <>
        <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
          <Header handleClickMenuToggle={clickMenuToggle}
            saveNewChanges={saveNewChanges}
            deleteDocument={handleDeleteDocument}
            toggle={toggleMenu}
            data={data} />
          <MainComponent data={data} />
        </div>

        <ConfirmDelete deleteModal={deleteModal}
          exitWithoutDeleting={exitWithoutDeleting}
          confirmDelete={handleConfirmDelete} />
      </> : <p>no data yet</p>
      }
    </div>
  )
}

export default App
