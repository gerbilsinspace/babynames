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
import { editBabyName } from 'containers/EditBabyName/actions';
import messages from './messages';

export class EditBabyName extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { babyNames, personChooser, onLikeClick } = this.props;
    let {editBabyName = ""} = this.props;

    let babyNameDetails = {};

    if (!editBabyName) {  
      for (var babyNameIndex = 0; babyNameIndex < babyNames.length; babyNameIndex++) {
        const babyName = babyNames[babyNameIndex];

        
        if ((babyName[personChooser] === "") || (babyName[personChooser] === undefined)) {
          editBabyName = babyName.name;
          break;
        }
      }
    }

    if (!editBabyName) {
      return (
        <h1><FormattedMessage {...messages.finishedRating} /></h1>
      )
    }

    babyNames.forEach((babyName) => {
      if (babyName.name === editBabyName) {
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
            onLikeClick(personChooser, babyNameDetails.name, messages.love.defaultMessage);
          }}></input>

          <input type="button" style={{background: "#fff"}} value={messages.like.defaultMessage} onClick={() => {
            onLikeClick(personChooser, babyNameDetails.name, messages.like.defaultMessage);
          }}></input>

          <input type="button" style={{background: "#fff"}} value={messages.dislike.defaultMessage} onClick={() => {
            onLikeClick(personChooser, babyNameDetails.name, messages.dislike.defaultMessage);
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
    editBabyName: state.toObject().editBabyName,
    babyNames: state.toObject().babyNames,
    personChooser: state.toObject().personChooser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: (personChooser, babyName, likeFactor) => {
      firebase.editBabyName(personChooser, babyName, likeFactor);
      dispatch(editBabyName(''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBabyName);
