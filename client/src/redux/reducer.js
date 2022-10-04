const { GET_CITY_WEATHER, GET_CITY_DB } = require("./actions");

const initialState = {
  city: [],
  city2: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_WEATHER: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case GET_CITY_DB: {
      return {
        ...state,
        city: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
