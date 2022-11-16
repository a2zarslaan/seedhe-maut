/* eslint-disable */

import { createContext, useState, useEffect } from 'react';

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

// used for one off import of collection to firestore
// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect only needed to run this function once, because when we have the firestore updated, then we don't need this to run everytime
  // useEffect(() => {
  //     addCollectionAndDocuments('categories', SHOP_DATA)
  // },[]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);
}
