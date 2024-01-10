import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST,fetchPostsFailure,fetchPostsSuccess } from './postAction';
function* fetchPosts() {
  try {
    const postsResponse = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const commentsResponse = yield fetch('https://jsonplaceholder.typicode.com/comments');

    const posts = yield postsResponse.json();
    const comments = yield commentsResponse.json();

    const postsWithComments = posts.map((post) => ({
      ...post,
      comments: comments.filter((comment) => comment.postId === post.id),
    }));

    yield put(fetchPostsSuccess(postsWithComments));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
  ]);
}
