import { createStore } from 'redux'; //Store

const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS',
        'NodeJS'        
        ],
};

function coursers(state = INITIAL_STATE, action) { //Reducer
    switch(action.type) {
        case 'ADD_COURSE':
            return { ...state, data: [ ...state.data, action.title] };
        default:
            return state;
    }
}


const store = createStore(coursers);

export default store;