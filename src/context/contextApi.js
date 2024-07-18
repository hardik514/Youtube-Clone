// import React, { createContext, useState, useEffect } from "react";
// import { fetchDataFromApi } from "../utils/api";

// export const Context = createContext();

// export const AppContext = (props) => {
//   const [loading, setLoading] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectCategories, setSelectCategories] = useState("New");
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     fetchSelectedCategoryData(selectCategories);
//   }, [selectCategories]);

//   const fetchSelectedCategoryData = async (query) => {
//     setLoading(true);
//     try {
//       const { contents } = await fetchDataFromApi(`search/?q=${query}`);
//       setSearchResults(contents);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Context.Provider
//       value={{
//         loading,
//         setLoading,
//         searchResults,
//         setSearchResults,
//         selectCategories,
//         setSelectCategories,
//         mobileMenu,
//         setMobileMenu
//       }}
//     >
//       {props.children}
//     </Context.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    console.log("Selected Category:", selectCategories);
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    try {
      console.log(`Fetching data for category: ${query}`);
      const { contents } = await fetchDataFromApi(`search/?q=${query}`);
      console.log("Fetched data:", contents);
      setSearchResults(contents);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
