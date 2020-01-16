export default function reducer(state = { jobs: [] }, action) {
  switch (action.type) {
    case 'FETCH_JOBS_SUCCESS':
      return { jobs: action.payload }
    case 'FETCH_JOB_DETAIL_REQUEST':
      return { jobDetail: null }
    case 'FETCH_JOB_DETAIL_SUCCESS':
      return { jobDetail: action.payload }
    default:
      return state
  }
}