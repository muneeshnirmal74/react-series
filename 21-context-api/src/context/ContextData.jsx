import React, { createContext } from "react";
import { useState } from "react";

export const PostDataContext = createContext();

function ContextData(props) {
  const [theme, settheme] = useState("light");

  return (
    <div>
      <PostDataContext.Provider value={[theme, settheme]}>
        {props.children}
      </PostDataContext.Provider>
    </div>
  );
}

export default ContextData;
