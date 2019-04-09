const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                loading: true
            };
        case 'GET_MORE_POSTS':
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
        case 'GET_MORE_POSTS_RECEIVED':
            return {
                ...state,
                posts: state.posts.concat(action.json),
                loading: false
            }
        default:
            return state;
    }
};
export default reducer;