/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from "react";
import { ToggleTypes } from "./Types";

const defaultState = {
  toggleMenu: false,
};

export const ToggleMenuContext = createContext<ToggleTypes>(defaultState);

export function ToggleMenuProvider(props: { children: any }) {
  const [toggleMenu, setToggleMenu] = useState(defaultState.toggleMenu);
  
  // open the aside menu to show the list of docs or close 
  function onChangeToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (    
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToggleMenuContext.Provider value={{ toggleMenu, onChangeToggleMenu }}>
      {props.children}
    </ToggleMenuContext.Provider>
  );
}
