import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  // user: null,
  user: {
    _id: "658582003efa9ce469c4b83b",
    username: "yamada",
    email: "yamada@gmail.com",
    password: "123456",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdimin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
