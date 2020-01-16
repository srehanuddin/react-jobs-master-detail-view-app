import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { fetchJobDetailRequest } from '../../store/actions'

class JobDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchJobDetailRequest(id)
  }

  render() {
    return (
      <>
        <h1>Job Detail</h1>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.jobDetail?.title}
            </Typography>
            <Typography color="textSecondary">
              {this.props.jobDetail?.description}
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              Job Type: {this.props.jobDetail?.employment_type}
            </Typography>
          </CardContent>
        </Card>
      </>
    )
  }
}

JobDetail.propTypes = {
  match: PropTypes.object,
  jobDetail: PropTypes.object,
  fetchJobDetailRequest: PropTypes.func
}

const mapStateToProps = (state /* , ownProps*/) => {
  return {
    jobDetail: state.jobDetail
  }
}

const mapDispatchToProps = { fetchJobDetailRequest }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobDetail))
