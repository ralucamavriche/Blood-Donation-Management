import { GET_REQUESTS, ADD_REQUESTS} from '../actions/types';

const initialState = {
    requests: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REQUESTS:
            return {
                ...state,
                requests: action.payload
                // loading: false
            };
        case ADD_REQUESTS:
            return {
                ...state,
                requests: [action.payload, ...state.requests]
            };
        default:
            return state;
    }
}