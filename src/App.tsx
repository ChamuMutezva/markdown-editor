import React, { useState, useEffect, useContext } from "react";
import { Watch } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import "./sass/main.scss";
import Header from "./header/Header";
import MainComponent from "./main/MainComponent";
import AsideNav from "./aside/AsideNav";
import ConfirmDelete from "./main/ConfirmDelete";
import SaveNewChangesComponent from "./main/SaveNewChanges";
import { ContentContext } from "./context/ContentContext";
import { ThemeContext } from "./context/ThemeContext";
import { DataTypes } from "./context/Types";
import { API_ENDPOINT_PATH } from "./config";
import NewDocAdded from "./main/NewDocAdded";

function App() {
  const { theme } = useContext(ThemeContext);
  const { ID, title, changeContent, markdownContent, data, setData } =
    useContext(ContentContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false); // display delete-modal dialogue
  const [saveEdits, setSaveEdits] = useState(false); // display save-edits dialogue
  const [createDoc, setCreateDoc] = useState(false); // display feedback - doc created
  const [, setError] = useState(null);

  // open the aside menu to show the list of docs or close
  function clickMenuToggle() {
    setToggleMenu(!toggleMenu);
  }

  // open delete modal , confirm to proceed deletion
  function handleDeleteDocument() {
    setDeleteModal(!deleteModal);
  }

  const handleConfirmDelete = async () => {
    // The data with the following ID's should not be removed
    if (
      ID === "634a235f414b8ab9c0b700e3" ||
      ID === "634a235f414b8ab9c0b700e4"
    ) {
      toast.error(`The data with id ${ID} cannot be deleted. Admin protected`);
      setDeleteModal(!deleteModal);
    } else {
      const response = await fetch(`${API_ENDPOINT_PATH}/${ID}`, {
        method: "DELETE",
      });

      setDeleteModal(!deleteModal);
      // eslint-disable-next-line no-underscore-dangle
      const remainingItems = data.filter(
        (item: { _id: string }) => item._id !== ID
      );
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setError(null);
        setData?.(() => remainingItems);
        // eslint-disable-next-line no-underscore-dangle
        changeContent?.(data[0]._id);
        // console.log("document removed");
      }
    }
  };

  function exitWithoutDeleting() {
    // console.log("exit without deleting");
    setDeleteModal(!deleteModal);
  }

  function exitWithoutSaving() {
    // console.log("exit without deleting");
    setSaveEdits(!saveEdits);
  }

  function documentCreatedMethod() {
    setCreateDoc(false);
  }

  const confirmSaveNewChanges = async () => {
    const targetItem = data.find((item: { _id: string }) => item._id === ID);
    // data with the following ID's should not be changed by users. Hence any attempt to
    // alter them will be rejected.
    if (
      ID === "634a235f414b8ab9c0b700e3" ||
      ID === "634a235f414b8ab9c0b700e4"
    ) {
      toast.info(`The data with id ${ID} cannot be EDITED. Admin protected`);
      exitWithoutSaving();
    } else {
      //  const { name, content } = targetItem;
      const response = await fetch(`${API_ENDPOINT_PATH}/${ID}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...targetItem,
          name: title,
          content: markdownContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setError(null);
      }
      toast.info(`The data with id ${ID} has been EDITED.`);
      setSaveEdits(!saveEdits);
    }
  };

  const saveNewChanges = async () => {
    setSaveEdits(!saveEdits);
  };

  useEffect(() => {}, [theme]);

  const handleBtnAddDoc = async () => {
    // create and add new  document. Data template for any first time saved documents
    const current = new Date();
    const docObject: DataTypes = {
      name: `document ${nanoid()}`,
      content: "# new document",
      createdAt: `${current.getDate()}-${
        current.getMonth() + 1
      }-${current.getFullYear()}`,
    };

    const response = await fetch(`${API_ENDPOINT_PATH}`, {
      method: "POST",
      body: JSON.stringify(docObject),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      clickMenuToggle() 
      setError(null);
      setData?.(data.concat(docObject));
      setCreateDoc(true);     
    }   
   
  };

  return (
    <div
      className={`app ${toggleMenu || deleteModal ? "app-max-height" : ""} ${
        theme ? "light-mode" : ""
      }`}
    >
      <AsideNav expand={toggleMenu} setExpand={() => clickMenuToggle} data={data} handleAdd={handleBtnAddDoc} />
      {data && data.length > 0 ? (
        <>
          <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
            <Header
              // eslint-disable-next-line react/jsx-no-bind
              handleClickMenuToggle={clickMenuToggle}
              saveNewChanges={saveNewChanges}
              // eslint-disable-next-line react/jsx-no-bind
              deleteDocument={handleDeleteDocument}
              toggle={toggleMenu}
              data={data}
            />
            <MainComponent data={data} />
          </div>
          <SaveNewChangesComponent
            saveEdits={saveEdits}
            // eslint-disable-next-line react/jsx-no-bind
            exitWithoutSaving={exitWithoutSaving}
            confirmSaveNewChanges={confirmSaveNewChanges}
          />
          <ConfirmDelete
            deleteModal={deleteModal}
            // eslint-disable-next-line react/jsx-no-bind
            exitWithoutDeleting={exitWithoutDeleting}
            confirmDelete={handleConfirmDelete}
          />
          <NewDocAdded
            createDoc={createDoc}
            // eslint-disable-next-line react/jsx-no-bind
            documentCreatedMethod={documentCreatedMethod}
          />
        </>
      ) : (
        <div className="loading-flex">
          <Watch color="#00BFFF" height={200} width={200} />
        </div>
      )}
    </div>
  );
}

export default App;
