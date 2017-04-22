/*
 *
 * List
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ListItem from 'containers/ListItem';
import Filter from 'containers/Filter';
import GenderFilter from 'containers/GenderFilter';
import messages from './messages';

export class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { babyNames } = this.props;

    return (
      <div>
        <h1><FormattedMessage {...messages.header} /></h1>
        <GenderFilter />
        <Filter />
        <div style={{clear: "both"}}></div>
        <ul>
          {babyNames.map((babyName, babyNameId) => {
            return (
              <ListItem
                key={babyNameId}
                ratings={babyName.ratings}
                {...babyName}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    babyNames: state.toObject().babyNames,  
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
