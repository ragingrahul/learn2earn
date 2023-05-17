import { initialState } from "./initial";

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECT":
      return {
        ...state,
        address: action.payload,
      };

    case "DISCONNECT":
      return {
        ...state,
        address: "",
      };

    default:
      return state;
  }
};

export default walletReducer;
