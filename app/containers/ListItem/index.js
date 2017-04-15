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
    const { name, gender, Grace, Joe, filter } = this.props;

    if (filter === "Love") {
      if ((Grace === "Love") && (Joe === "Love")) {
        return (
          <li>
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>Grace: {Grace}</p>
            <p>Joe: {Joe}</p>
          </li>
        );
      }

      return null;
    }

    if (filter === "LikeAndLove") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        return (
          <li>
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>Grace: {Grace}</p>
            <p>Joe: {Joe}</p>
          </li>
        );
      }

      return null;
    }

    if (filter === "Other") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        return (
          <li>
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>Grace: {Grace}</p>
            <p>Joe: {Joe}</p>
          </li>
        );
      }

      return null;
    }
    
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

function mapStateToProps(state) {
  return {
    filter: state.toObject().filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
