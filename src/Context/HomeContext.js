import { createContext, useContext, useState } from "react";

const HomeContext = createContext([]);

const HomeProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  return (
    <HomeContext.Provider value={{ questions, setQuestions }}>
      {children}
    </HomeContext.Provider>
  );
};

const useHome = () => useContext(HomeContext);

export { useHome, HomeProvider };
