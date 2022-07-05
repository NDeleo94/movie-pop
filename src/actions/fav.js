import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { types } from "../types/types";
import { loadData } from "../utils/loadData";

export const crearRegistro = (pelicula) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date(),
      movie: {
        id: pelicula.id,
        name: pelicula.name,
        image: pelicula.image,
      },
    };

    const ref = await addDoc(collection(db, `${uid}/fav/favoritas`), datos);

    console.log(ref);
    console.log("add");

    const data = await loadData(uid);

    dispatch(crear(data));
  };
};

export const crear = (data) => {
  return {
    type: types.favAdd,
    payload: data,
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.favRead,
    payload: data,
  };
};

export const eliminarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await deleteDoc(doc(db, `${uid}/fav/favoritas/${id}`));

    dispatch(eliminar(id));
  };
};

export const eliminar = (id) => {
  return {
    type: types.favDelete,
    payload: id,
  };
};

export const limpiar = () => {
    return {
      type: types.favClean,
    };
  };