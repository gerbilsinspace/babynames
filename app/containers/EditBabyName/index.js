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
        <h1>You have finished rating all the Baby Names so far!</h1>
      )
    }

    babyNames.forEach((babyName) => {
      if (babyName.name === editBabyName) {
        babyNameDetails = babyName;
      }
    });

    return (
      <div>
        <h2>{ babyNameDetails.name }</h2>
        <p>Name: { babyNameDetails.name }</p>
        <p>Gender: { babyNameDetails.gender }</p>
        <form>
          <input type="button" value={messages.love.defaultMessage} onClick={() => {
            onLikeClick(personChooser, babyNameDetails.name, messages.love.defaultMessage);
          }}></input>

          <input type="button" value={messages.like.defaultMessage} onClick={() => {
            onLikeClick(personChooser, babyNameDetails.name, messages.like.defaultMessage);
          }}></input>

          <input type="button" value={messages.dislike.defaultMessage} onClick={() => {
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
