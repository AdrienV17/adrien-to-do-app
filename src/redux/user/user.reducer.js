import {userTypes} from './user.types';

const INITIAL_STATE = {
  id: "",
  name: "",
  email: "",
  isFetching: false,
  errorMessage: undefined,
  thingsToDo:[]
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_START:
    case userTypes.SIGN_IN_EMAIL_START:
    case userTypes.ADD_THING_TO_DO_START:
    case userTypes.REMOVE_THING_TO_DO_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      };
    case userTypes.SIGN_IN_SUCCESS:
    case userTypes.ADD_THING_TO_DO_SUCCESS:
    case userTypes.REMOVE_THING_TO_DO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };
    case userTypes.SIGN_UP_FAILURE:
    case userTypes.SIGN_IN_FAILURE:
    case userTypes.REMOVE_THING_TO_DO_FAILURE:
    case userTypes.ADD_THING_TO_DO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case userTypes.SIGN_OUT:
      return INITIAL_STATE;
    case userTypes.REMOVE_ERROR_MESSAGE:{
      return{
        ...state,
        errorMessage:undefined
      }
    }
    default:
      return state;
  }
};
