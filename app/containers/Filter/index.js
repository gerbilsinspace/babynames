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
        <div>
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
        </div>

        <div>
          <input type="button" value="All Boy Names" onClick={() => {
            onButtonClick("AllBoy");
          }}></input>
          <input type="button" value="Both Love" onClick={() => {
            onButtonClick("LoveBoy");
          }}></input>
          <input type="button" value="Both Love or Like" onClick={() => {
            onButtonClick("LikeAndLoveBoy");          
          }}></input>
          <input type="button" value="Everything Else" onClick={() => {
            onButtonClick("OtherBoy");
          }}></input>
        </div>

        <div>
          <input type="button" value="All Girl Names" onClick={() => {
            onButtonClick("AllGirl");
          }}></input>
          <input type="button" value="Both Love" onClick={() => {
            onButtonClick("LoveGirl");
          }}></input>
          <input type="button" value="Both Love or Like" onClick={() => {
            onButtonClick("LikeAndLoveGirl");          
          }}></input>
          <input type="button" value="Everything Else" onClick={() => {
            onButtonClick("OtherGirl");
          }}></input>
        </div>
        
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
