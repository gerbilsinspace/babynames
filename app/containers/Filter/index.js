/*
 *
 * Filter
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { filter } from 'containers/Filter/actions';

export class Filter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onButtonClick } = this.props;

    return (
      <form>
        <input type="button" value="All" onClick={() => {
          onButtonClick("All");
        }}></input>
        <input type="button" value="Both Love" onClick={() => {
          onButtonClick("Love");
        }}></input>
        <input type="button" value="Both Love or Like" onClick={() => {
          onButtonClick("LikeAndLove");          
        }}></input>
        <input type="button" value="Everything Else" onClick={() => {
          onButtonClick("Other");
        }}></input>
      </form>
    );
  }
}

Filter.propTypes = {
};

const mapStateToProps = (state) => {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (likeFactor) => {
      dispatch(filter(likeFactor));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
