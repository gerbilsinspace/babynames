/*
 *
 * ListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, gender, Grace, Joe } = this.props;
    console.log(Grace, Joe);
    return (
      <li>
        <h2>{name}</h2>
        <p>{gender}</p>
        <p>Grace: {Grace}</p>
        <p>Joe: {Joe}</p>
      </li>
    );
  }
}

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ListItem);
