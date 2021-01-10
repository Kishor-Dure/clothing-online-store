import { userActionTypes } from './user.type';

const INTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INTIAL_STATE, action) => {
    switch (action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:action.payload
            }
            default:
                return state;
    }
}

export default userReducer;