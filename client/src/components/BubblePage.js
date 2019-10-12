import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth.js";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/colors")
      .then(res => {
        console.log("Res from BubblePage", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
