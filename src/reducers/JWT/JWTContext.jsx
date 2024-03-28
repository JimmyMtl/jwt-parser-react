import React, { createContext, useEffect, useReducer } from "react";
import JWTReducer from "./JWTReducer.jsx";
import { decodeHeader, decodePayload, decodeSignature } from "./JWTActions.jsx";

export const JWTContext = createContext();

export const JWTProvider = ({ children }) => {
  const initialState = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",

    jwtPayload: {},
    jwtHeader: {},
    jwtSignature: {},
  };

  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const { token } = state;
  useEffect(() => {
    dispatch({
      type: "UPDATE_DECODED_TOKEN",
      payload: {
        jwtPayload: decodePayload(state.token),
        jwtHeader: decodeHeader(state.token),
        jwtSignature: decodeSignature(state.token),
      },
    });
  }, [token]);

  return (
    <JWTContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTProvider;
