import { OPEN_SIDEMENU, CLOSE_SIDEMENU } from "../actions/sidemenu";

const initialState = {
    open: true,
}

function sidemenu(state = initialState, action) {
    switch (action.type) {
        case OPEN_SIDEMENU:
            return {
                open: action.open,
            };
        case CLOSE_SIDEMENU:
            return {
                open: action.open,
            };
        default:
            return state;
    }
}

export default sidemenu;
