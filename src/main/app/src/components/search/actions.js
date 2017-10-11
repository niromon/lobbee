export const SEARCH = 'SEARCH';

export function search(query) {
    console.log("SEARCH")
    return {type: SEARCH, query};
};