import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class JobListItem extends React.PureComponent {

    viewDetail = () => {
      const { viewDetail, job } = this.props
      viewDetail(job.id)
    }

    render() {
      const { job } = this.props
      return (
        <>
          <ListItem
            className='pointer'
            alignItems="flex-start"
            onClick={this.viewDetail}
          >
            <ListItemText
              primary={job.title}
              secondary={job.description}
            />
          </ListItem>
        </>
      )
    }
}

JobListItem.propTypes = {
  job: PropTypes.object,
  viewDetail: PropTypes.func
}

export default JobListItem