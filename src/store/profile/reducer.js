import {
  CHANGE_COUNTY,
  CHANGE_NAME,
  CHANGE_USER_NAME,
  CHANGE_DESCRIPTION,
  CHANGE_PHONE,
} from "./types";

const inititalState = {
  name: "Andrey",
  username: "monroo",
  phone: "89881467737",
  county: "russia",
  description: "opisanie",
};

export const profileReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case CHANGE_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case CHANGE_COUNTY:
      return {
        ...state,
        county: action.payload,
      };
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
};
