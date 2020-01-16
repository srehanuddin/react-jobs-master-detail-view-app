import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'

import { fetchJobsRequest } from '../../store/actions'
import JobListItem from '../../components/JobListItem'

class JobList extends React.Component {

  componentDidMount() {
    this.props.fetchJobsRequest()
  }

    viewDetail = (id) => {
      this.props.history.push(`/job/${id}`)
    }

    render() {
      return (
        <>
          <h1>Job List</h1>
          <List>
            {
              this.props.jobs && this.props.jobs.map((job) => (
                <JobListItem
                  key={job.id}
                  job={job}
                  viewDetail={this.viewDetail}
                />
              ))
            }
          </List>
        </>
      )
    }
}

JobList.propTypes = {
  history: PropTypes.object,
  jobs: PropTypes.array,
  fetchJobsRequest: PropTypes.func
}

const mapStateToProps = (state /* , ownProps*/) => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = { fetchJobsRequest }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobList))