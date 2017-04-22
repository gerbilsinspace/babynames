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
    const { menu, appId, addBabyName, babyNames, returnToMainMenu } = this.props;

    let name;
    let gender = "Both";

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

          addBabyName(name.value.trim(), gender.trim(), babyNames);
          returnToMainMenu();
        }}>
          <div>
            <input type="text" placeholder={messages.babyName.defaultMessage} ref={(node) => {
              name = node;
            }}></input>
          </div>
          <div>
            <h2><FormattedMessage {...messages.gender} /></h2>  
          </div>
          <div>
            <input type="button" value={messages.male.defaultMessage} style={{border: "1px solid #84C1CA", background: "#a4e1eA"}} onClick={() => {
              gender = "Male";
            }}></input>
            <input type="button" value={messages.female.defaultMessage} style={{border: "1px solid #FAACD8", background: "#FAcCf8"}} onClick={() => {
              gender = "Female";
            }}></input>
            <input type="button" value={messages.both.defaultMessage} onClick={() => {
              gender = "Both";
            }}></input>
          </div>
          <div>
            <input type="submit" value={messages.submit.defaultMessage}></input>
          </div>
        </form>
      </div>
    );
  }
}

AddBabyName.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    menu: state.get('menu'),
    appId: state.get('appId'),
    babyNames: state.get('babyNames'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBabyName: (name, gender, babyNames) => {
      firebase.addBabyName(name, gender, babyNames);
    },
    returnToMainMenu: () => {
      dispatch(selectMenu(''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBabyName);
