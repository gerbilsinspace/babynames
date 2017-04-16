/*
 *
 * AddBabyName
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import firebase from 'data/firebase';
import { selectMenu } from 'containers/Menu/actions';

import messages from './messages';

export class AddBabyName extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { personChooser, menu, addBabyName, babyNames, returnToMainMenu } = this.props;

    let name;
    let gender;

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form onSubmit={(e) => {
          e.preventDefault();

          if (!name.value.trim()) {
            return;
          }

          addBabyName(name.value.trim(), gender.value.trim(), babyNames);
          returnToMainMenu();
        }}>
          <input type="text" placeholder={messages.babyName.defaultMessage} ref={(node) => {
            name = node;
          }}></input>
          <input type="text" placeholder={messages.gender.defaultMessage} ref={(node) => {
            gender = node;
          }}></input>
          <input type="submit" value={messages.submit.defaultMessage}></input>
        </form>
      </div>
    );
  }
}

AddBabyName.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    personChooser: state.toObject().personChooser,
    menu: state.toObject().menu,
    babyNames: state.toObject().babyNames,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBabyName: (babyNames, name, gender) => {
      firebase.addBabyName(babyNames, name, gender);
    },
    returnToMainMenu: () => {
      dispatch(selectMenu(''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBabyName);
