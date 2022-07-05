import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/config";
import { types } from "../types/types";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: username });
        dispatch(login(user.uid, user.displayName));
      }
    );
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch({
      type: types.logout,
    });
  };
};
