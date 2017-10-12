import {SEARCH} from "./actions";
import {dataResults} from "../../data/dataResults";

const initialState = {
    query: '',
    characters: [
        {name: 'Lara Croft', type: 'hero'},
        {name: 'Jacob', type: 'ally'}, {name: 'Jonah Maiava', type: 'ally'},
        {name: 'Deathless Ones', type: 'enemy'}
        ],
    results: []
};

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH: {
            const {query} = action;
            const results = dataResults; //state.characters.filter((character) => character.name.includes(query));
            return {...state, query, results};
        }
        default:
            return state;
    }
}