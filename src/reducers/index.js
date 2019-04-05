const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                loading: true
            };
        case 'POSTS_RECEIVED':
            return {
                ...state,
                posts: action.json,
                loading: false
            }
        case 'FILTER_POSTS':
            return {
                ...state,
                filterText: action.filterText
            }
        default:
            return state;
    }
};
export default reducer;