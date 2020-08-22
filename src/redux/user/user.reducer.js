const { userTypes } = require("./user.types");

const INITIAL_STATE = {
    id:'',
    name:'',
    email:'',
    isFetching:false,
    errorMessage:undefined
}

export const userReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case userTypes.SIGN_IN_START:
            case userTypes.SIGN_IN_EMAIL_START:
                return{
                ...state,
                isFetching:true
            }  
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                isFetching:false,
                ...action.payload
            }
        case userTypes.SIGN_UP_FAILURE:
            case userTypes.SIGN_IN_FAILURE:
            return{
                ...state,
                errorMessage:action.payload
            }   
        case userTypes.SIGN_OUT:
            return INITIAL_STATE 
        default:
            return state
    }
}