import {
    put,
    takeLatest,
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

function* actionWatcher() {
    yield takeLatest('GET_POSTS', fetchPosts)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}