/*
 *
 * EditBabyName
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import firebase from 'data/firebase';
import { selectMenu } from 'containers/Menu/actions';
import { babyNameInEditState } from 'containers/EditBabyName/actions';
import { addItemToLoading, removeItemFromLoading } from 'containers/Loading/actions';
import messages from './messages';

export class EditBabyName extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { appId, babyNames, user, onLikeClick } = this.props;
    let {babyNameInEditState = ""} = this.props;
    let babyNameDetails = {};

    if (!babyNameInEditState) { // choose a baby name that hasn't been edited to edit
      babyNames.forEach((babyName) => {
        if (babyName.ratings) {
          babyName.ratings.forEach((rating) => {
            if (rating.name === undefined) {
              babyNameInEditState = babyName.name;
            }
          });
        } else {
          babyNameInEditState = babyName.name;
        }
      });
    }

    if (!babyNameInEditState) {
      return (
        <h1><FormattedMessage {...messages.finishedRating} /></h1>
      )
    }

    babyNames.forEach((babyName) => {
      if (babyName.name === babyNameInEditState) {
        babyNameDetails = babyName;
      }
    });

    let borderStyling = "1px solid #ddd";
    let backgroundStyling = "#fff";

    if (babyNameDetails.gender === "Male") {
      borderStyling = "1px solid #84C1CA";
      backgroundStyling = "#a4e1eA";
    } else if (babyNameDetails.gender === "Female") {
      borderStyling = "1px solid #FAACD8";
      backgroundStyling = "#FAcCf8";
    }

    return (
      <div style={{border: borderStyling, background: backgroundStyling}}>
        <h2>{ babyNameDetails.name }</h2>
        <form>
          <input type="button" style={{background: "#fff"}} value={messages.love.defaultMessage} onClick={() => {
            onLikeClick(appId, user.name, babyNameDetails.name, messages.love.defaultMessage);
          }}></input>

          <input type="button" style={{background: "#fff"}} value={messages.like.defaultMessage} onClick={() => {
            onLikeClick(appId, user.name, babyNameDetails.name, messages.like.defaultMessage);
          }}></input>

          <input type="button" style={{background: "#fff"}} value={messages.dislike.defaultMessage} onClick={() => {
            onLikeClick(appId, user.name, babyNameDetails.name, messages.dislike.defaultMessage);
          }}></input>
        </form>
      </div>
    );
  }
}

EditBabyName.propTypes = {
};

function mapStateToProps(state) {
  return {
    babyNameInEditState: state.get('babyNameInEditState'),
    babyNames: state.get('babyNames'),
    appId: state.get('appId'),
    user: state.get('user'),
    personChooser: state.get('personChooser')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: (appId, userName, babyName, rating) => {
      firebase.editBabyName(appId, userName, babyName, rating);
      dispatch(babyNameInEditState(''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBabyName);
