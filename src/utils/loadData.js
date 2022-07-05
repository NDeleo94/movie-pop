import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const loadData = async (uid) => {
    const response = await getDocs(collection(db, `${uid}/fav/favoritas`));
    const data = [];
  
    response.forEach((fav) => {
      const favData = fav.data();
      data.push({
        id: fav.id,
        ...favData,
      });
    });
    return data;
  };
  