export function fetchJobsRequest() {
  return { type: 'FETCH_JOBS_REQUEST' }
}

export function fetchJobsSuccess(payload) {
  return {
    type: 'FETCH_JOBS_SUCCESS',
    payload
  }
}

export function fetchJobDetailRequest(id) {
  return { type: 'FETCH_JOB_DETAIL_REQUEST', payload: id }
}

export function fetchJobDetailSuccess(payload) {
  return {
    type: 'FETCH_JOB_DETAIL_SUCCESS',
    payload
  }
}
