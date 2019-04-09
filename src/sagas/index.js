import {
    put,
    takeEvery,
    all
} from 'redux-saga/effects';

function* fetchPosts() {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const responseBody = yield response.json();

    yield put({
        type: "POSTS_RECEIVED",
        json: responseBody.slice(0, 10)
    });
}

function* fetchMorePosts() {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const responseBody = yield response.json();

    yield put({
        type: "GET_MORE_POSTS_RECEIVED",
        json: responseBody.slice(0, 10)
    });
}

function* actionWatcher() {
    yield takeEvery('GET_POSTS', fetchPosts);
    yield takeEvery('GET_MORE_POSTS', fetchMorePosts);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}