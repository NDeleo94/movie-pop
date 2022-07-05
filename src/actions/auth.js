import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/config";
import { types } from "../types/types";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
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
