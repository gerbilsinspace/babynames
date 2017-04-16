/*
 *
 * GenderFilter
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Select from 'react-select';
import { genderFilter } from 'containers/GenderFilter/actions';
import messages from './messages';

import 'react-select/dist/react-select.css';

export class GenderFilter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onSelectChange, genderFilter } = this.props;

    const options = [
      { value: 'Both', label: 'Both'},
      { value: 'Female', label: 'Female' },
      { value: 'Male', label: 'Male' }
    ];

    return (
      <div style={{margin: "0 10px 10px"}}>
        <p style={{margin: '10px 0'}}>Filter By Gender</p>
        <Select
          name="genderFilterSelect"
          value={genderFilter}
          options={options}
          onChange={onSelectChange}
        />
      </div>
    );
  }
}

GenderFilter.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    genderFilter: state.toObject().genderFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectChange: (val) => {
      dispatch(genderFilter(val.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderFilter);
