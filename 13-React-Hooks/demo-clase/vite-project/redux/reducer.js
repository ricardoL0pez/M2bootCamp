import { GET_ALL_USERS, USER_DETAIL } from './actiontype';

const initialState = {
    users: [],
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return { ...state }
    }
}

export default rootReducer;