export const getPosts = () => ({
    type: 'GET_POSTS',
});

export const filterPosts = (filterText) => ({
    type: 'FILTER_POSTS',
    filterText
});