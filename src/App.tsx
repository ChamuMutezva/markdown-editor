/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from "react";
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
import { ToggleMenuContext } from "./context/ToggleMenuContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { toggleMenu, setToggleMenu } = useContext(ToggleMenuContext);
  const {
    ID,
    title,
    changeContent,
    markdownContent,
    data,
    setData,
    fetchStatus,
  } = useContext(ContentContext);
  const [timer, setTimer] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false); // display delete-modal dialogue
  const [saveEdits, setSaveEdits] = useState(false); // display save-edits dialogue
  const [createDoc, setCreateDoc] = useState(false); // display feedback - doc created
  const [, setError] = useState(null);

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
        changeContent?.(data[0]._id);
      }
    }
  };

  // delete conntent
  function exitWithoutDeleting() {
    setDeleteModal(!deleteModal);
  }

  // during edit: exit without saving
  function exitWithoutSaving() {
    setSaveEdits(!saveEdits);
  }

  // Create new document
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
      // show modal for successful edit
      toast.info(`The data with id ${ID} has been EDITED.`);
      setSaveEdits(!saveEdits);
    }
  };
  /* ------------------------------------------------------------------------- */
  /* --------------- END OF confirmSaveNewChanges FUNCTION ------------------- */
  /* ------------------------------------------------------------------------- */
  const saveNewChanges = async () => {
    setSaveEdits(!saveEdits);
  };

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
      setToggleMenu(toggleMenu);
      setError(null);
      setData?.(data.concat(docObject));
      setCreateDoc(true);
    }
  };
  /* ------------------------------------------------------------------ */
  /* --------------- END OF handleBtnAddDoc FUNCTION ------------------- */
  /* ------------------------------------------------------------------- */

  // modal to run before data is loaded
  if (fetchStatus !== "success") {
    // the timer , keeps track of the time it takes mongodb realm to
    // present the data. On average the site is taking 5 seconds
    // if the time exceeds 10 seconds - this can be a result of poor network
    const fetchStatusTimer = setInterval(() => {
      setTimer(() => timer + 1);
      if (fetchStatus) {
        clearInterval(fetchStatusTimer);
      }
    }, 1000);
  }

  return (
    <div
      className={`app ${toggleMenu || deleteModal ? "app-max-height" : ""} ${
        theme ? "light-mode" : ""
      }`}
    >
      <AsideNav data={data} handleAdd={handleBtnAddDoc} />

      {data && data.length > 0 ? (
        <>
          <div className={`main-page ${toggleMenu ? "collapse" : ""}`}>
            <Header
              saveNewChanges={saveNewChanges}
              deleteDocument={handleDeleteDocument}
            />

            <MainComponent data={data} />
          </div>
          <SaveNewChangesComponent
            saveEdits={saveEdits}
            exitWithoutSaving={exitWithoutSaving}
            confirmSaveNewChanges={confirmSaveNewChanges}
          />
          <ConfirmDelete
            deleteModal={deleteModal}
            exitWithoutDeleting={exitWithoutDeleting}
            confirmDelete={handleConfirmDelete}
          />
          <NewDocAdded
            createDoc={createDoc}
            documentCreatedMethod={documentCreatedMethod}
          />
        </>
      ) : (
        <div className="loading-flex">
          {timer < 10 ? (
            <div className="loading-flex">
              <Watch color="#00BFFF" height={200} width={200} />
              <p className="loading-flex-text">Loading... {timer} sec</p>
            </div>
          ) : (
            <div className="loading-flex">
              <Watch color="#00BFFF" height={200} width={200} />
              <h2 className="loading-flex-title">
                Loading has taken longer than expected{" "}
              </h2>
              <p className="loading-flex-text">Please check your network!</p>
              <p>Or the site is restricted without permission</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
