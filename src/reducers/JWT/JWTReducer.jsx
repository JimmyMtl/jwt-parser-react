const JWTReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload?.token || "",
      };
    case "UPDATE_DECODED_TOKEN":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default JWTReducer;
