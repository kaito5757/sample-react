import { createContext, useState } from "react";
import { ReturnHome } from "../common/returnHome";

const LastNameContext = createContext<string>("");
const FirstNameContext = createContext<string>("");

export default function UseContextSample() {
  const [lastName, setLastName] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");

  return (
    // <FirstNameContext.Provider value={{setLastName}}>
    <main>
      <h1>useContext Sample</h1>
      <ReturnHome />
    </main>
    // </FirstNameContext.Provider>
  );
}
