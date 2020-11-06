import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'input/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT, (username)=>({
    username,
}));

const initState = {
    username: "",
};

const input = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: {username}}) => ({
            ...state,
            username,
        }),
    },
    initState
)

export default input;