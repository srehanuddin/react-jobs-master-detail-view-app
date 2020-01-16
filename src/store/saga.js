import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchJobsSuccess, fetchJobDetailSuccess } from './actions'

function* jobListSaga(payload) {
  try {
    let response = yield call(httpGetRequest, '/api/jobs.json')
    yield put(fetchJobsSuccess(response))
  } catch (err) {
    // console.log(err)
  }
}

function* jobDetailSaga(action) {
  try {
    let response = yield call(httpGetRequest, '/api/jobs.json')
    response = response.find(job => (job.id).toString() === action.payload)

    yield put(fetchJobDetailSuccess(response))
  } catch (err) {
    // console.log(err)
  }
}

function httpGetRequest(url) {
  return fetch(url)
    .then(res => res.json())
}

export default function* rootSaga() {
  yield takeEvery('FETCH_JOBS_REQUEST', jobListSaga)
  yield takeEvery('FETCH_JOB_DETAIL_REQUEST', jobDetailSaga)
}