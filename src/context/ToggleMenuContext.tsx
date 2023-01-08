/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from "react";
import { ToggleTypes } from "./Types";

const defaultState = {
  toggleMenu: false,
  setToggleMenu: () => false
};

export const ToggleMenuContext = createContext<ToggleTypes>(defaultState);

export function ToggleMenuProvider(props: { children: any }) {
  const [toggleMenu, setToggleMenu] = useState(defaultState.toggleMenu);
 
  return (    
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {props.children}
    </ToggleMenuContext.Provider>
  );
}
