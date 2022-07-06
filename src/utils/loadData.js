import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/config";

export const loadData = async (uid) => {
  const first = query(collection(db, `${uid}/fav/favoritas`));
  const response = await getDocs(first);

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
