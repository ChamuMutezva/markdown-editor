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
import SaveNewChangesComponent from './main/SaveNewChanges'
import { ContentContext } from './context/ContentContext'
import { ThemeContext } from './context/ThemeContext'
//import Data from './assets/data.json'
import { DataTypes } from './context/Types'
import { API_ENDPOINT_PATH } from './config'
import NewDocAdded from './main/NewDocAdded'

function App() {
  const { theme } = useContext(ThemeContext)
  const { ID, title, changeContent, markdownContent } = useContext(ContentContext)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false) // display delete-modal dialogue
  const [saveEdits, setSaveEdits] = useState(false) // display save-edits dialogue
  const [createDoc, setCreateDoc] = useState(false) // display feedback - doc created
  const [data, setData] = useState([] as any[])
  const [error, setError] = useState(null)

  function clickMenuToggle() {
    setToggleMenu(!toggleMenu)
  }

  // open delete modal , confirm to proceed deletion
  function handleDeleteDocument() {
    setDeleteModal(!deleteModal)
  }

  const handleConfirmDelete = async () => {
    console.log("confirm delete button")
    // The data with the following ID's should not be removed 
    if (ID === "634a235f414b8ab9c0b700e3" || ID === "634a235f414b8ab9c0b700e4") {
      console.log("Do not delete this markdown content")
      return setDeleteModal(!deleteModal)
    } else {
      const response = await fetch(`${API_ENDPOINT_PATH}/${ID}`, {
        method: 'DELETE',
      })

      setDeleteModal(!deleteModal)
      const remainingItems = data.filter(item => item._id !== ID)
      const json = await response.json()
      if (!response.ok) {
        setError(json.error)
      }

      if (response.ok) {
        setError(null)
        setData(() => remainingItems)
        changeContent?.(data[0]._id)
        console.log("document removed")
      }

    }
  }

  function exitWithoutDeleting() {
    console.log("exit without deleting")
    setDeleteModal(!deleteModal)
  }

  function exitWithoutSaving() {
    console.log("exit without deleting")
    setSaveEdits(!saveEdits)
  }

  function documentCreatedMethod() {
    setCreateDoc(false)
  }

  const confirmSaveNewChanges = async () => {
    console.log(ID)
    const targetItem = data.find(item => item._id === ID)

    const { name, content } = targetItem
    console.log(name)
    console.log(content)
    const response = await fetch(`${API_ENDPOINT_PATH}/${ID}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...targetItem,
        name: title,
        content: markdownContent
      }),
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
      console.log("document has been updated")
    }
    setSaveEdits(!saveEdits)
  }

  const saveNewChanges = async () => {
    setSaveEdits(!saveEdits)

  }

  useEffect(() => {

  }, [ID])
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
      setCreateDoc(true)
      console.log("new document added")
    }

  }

  // Get data on load from mongodb
  useEffect(() => {
    // load data from mongo db
    console.log(API_ENDPOINT_PATH)
    const fetchFiles = async () => {
      const response = await fetch(`${API_ENDPOINT_PATH}`)
      const json = await response.json()
      if (response.ok) {
        setData(json)
      }
    }
    console.log(data)
    console.log(ID)
    fetchFiles()
  }, [data.length])

  return (
    <div className={`app ${toggleMenu || deleteModal ? "app-max-height" : ""} ${theme ? "light-mode" : ""}`}>
      {/*when toggleMenu or deleteModal set the app div to a max-height of 100vh to prevent scrolling*/}

      <AsideNav expand={toggleMenu} data={data} handleAdd={handleBtnAddDoc} />
      {data && data.length > 0 ?
        <>
          <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
            <Header handleClickMenuToggle={clickMenuToggle}
              saveNewChanges={saveNewChanges}
              deleteDocument={handleDeleteDocument}
              toggle={toggleMenu}
              data={data} />
            <MainComponent data={data} />
          </div>
          <SaveNewChangesComponent
            saveEdits={saveEdits}
            exitWithoutSaving={exitWithoutSaving}
            confirmSaveNewChanges={confirmSaveNewChanges}
          />
          <ConfirmDelete deleteModal={deleteModal}
            exitWithoutDeleting={exitWithoutDeleting}
            confirmDelete={handleConfirmDelete}
          />
          <NewDocAdded createDoc={createDoc}
            documentCreatedMethod={documentCreatedMethod}
          />
        </> :
        <p>no data yet</p>
      }
    </div>
  )
}

export default App
