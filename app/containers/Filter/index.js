/*
 *
 * Filter
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { filter } from 'containers/Filter/actions';
import messages from './messages';

export class Filter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onSelectChange, filter } = this.props;

    const options = [
      {
        value: 'All',
        label: messages.all.defaultMessage
      },
      { 
        value: 'Love',
        label: messages.love.defaultMessage
      },
      {
        value: 'LikeAndLove',
        label: messages.like.defaultMessage
      },
      {
        value: 'Other',
        label: messages.other.defaultMessage
      }
    ];

    return (
      <div style={{margin: "0 10px"}}>
        <p style={{margin: '10px 0'}}>Filter by Rating</p>
        <Select
          name="filterSelect"
          value={filter}
          options={options}
          onChange={onSelectChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    filter: state.toObject().filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectChange: (likeFactor) => {
      dispatch(filter(likeFactor.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
