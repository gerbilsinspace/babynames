/*
 *
 * Filter
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { filter } from 'containers/Filter/actions';
import messages from './messages';

export class Filter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onButtonClick } = this.props;

    return (

      <form>
        <h2><FormattedMessage {...messages.header} /></h2>
        <div>
          <input type="button" value={messages.all.defaultMessage} onClick={() => {
            onButtonClick("All");
          }}></input>
          <input type="button" value={messages.love.defaultMessage} onClick={() => {
            onButtonClick("Love");
          }}></input>
          <input type="button" value={messages.like.defaultMessage} onClick={() => {
            onButtonClick("LikeAndLove");          
          }}></input>
          <input type="button" value={messages.other.defaultMessage} onClick={() => {
            onButtonClick("Other");
          }}></input>
        </div>

        <div>
          <input type="button" value={messages.allBoy.defaultMessage} onClick={() => {
            onButtonClick("AllBoy");
          }}></input>
          <input type="button" value={messages.loveBoy.defaultMessage} onClick={() => {
            onButtonClick("LoveBoy");
          }}></input>
          <input type="button" value={messages.likeBoy.defaultMessage} onClick={() => {
            onButtonClick("LikeAndLoveBoy");          
          }}></input>
          <input type="button" value={messages.otherBoy.defaultMessage} onClick={() => {
            onButtonClick("OtherBoy");
          }}></input>
        </div>

        <div>
          <input type="button" value={messages.allGirl.defaultMessage} onClick={() => {
            onButtonClick("AllGirl");
          }}></input>
          <input type="button" value={messages.loveGirl.defaultMessage} onClick={() => {
            onButtonClick("LoveGirl");
          }}></input>
          <input type="button" value={messages.likeGirl.defaultMessage} onClick={() => {
            onButtonClick("LikeAndLoveGirl");          
          }}></input>
          <input type="button" value={messages.otherGirl.defaultMessage} onClick={() => {
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
