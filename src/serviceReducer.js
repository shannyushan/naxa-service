import { GET_SERVICE_SUCCESS } from "./actions"

const serviceReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case GET_SERVICE_SUCCESS:
      return { ...state, services: action.services };
    default:
      return state;
  }
};
export default serviceReducer;
