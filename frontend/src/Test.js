import React, { useContext } from "react";
import AppSection from "./AppSection";
import { objData } from "./App";

const Test = () => {
  const data = useContext(objData);
  return (
    <div>
      {data.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <AppSection data={item} />
      ))}
    </div>
  );
};

export default Test;
