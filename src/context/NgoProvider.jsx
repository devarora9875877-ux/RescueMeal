import { useState } from "react";
import NgoContext from "./NgoContext";

function NgoProvider({ children }) {
  const [selectedNgo, setSelectedNgo] = useState(null);

  return (
    <NgoContext.Provider value={{ selectedNgo, setSelectedNgo }}>
      {children}
    </NgoContext.Provider>
  );
}

export default NgoProvider;
