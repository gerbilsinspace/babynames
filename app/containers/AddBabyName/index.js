/*
 *
 * AddBabyName
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import firebase from 'data/firebase';
import Input from 'components/Input';
import { selectMenu } from 'containers/Menu/actions';

import messages from './messages';

export class AddBabyName extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { menu, appId, addBabyName, babyNames, returnToMainMenu } = this.props;

    let name;
    let gender = "Both";

    return (
      <div style={{'display': 'flex', 'flexDirection': 'column'}}>
        <h1 style={{'flex': 1, 'paddingLeft': 0, 'paddingRight': 0}}>
          <FormattedMessage {...messages.header} />
        </h1>
        <form style={{'display': 'flex', 'flexDirection': 'column'}} onSubmit={(e) => {
          e.preventDefault();

          if (!name.value.trim()) {
            return;
          }

          addBabyName(
            name.value.trim(), 
            gender.trim(), 
            babyNames,
            appId
          );
          returnToMainMenu();
        }}>
          <input type="text" placeholder={messages.babyName.defaultMessage} style={{'flex': 1, 'margin': '0 0 10px', 'padding': '10px', 'borderRadius': '2px', 'background': '#fff'}} ref={(node) => {
            name = node;
          }}></input>
            <h2 style={{'flex': 1, 'paddingLeft': 0, 'paddingRight': 0}}><FormattedMessage {...messages.gender} /></h2>  
          <div style={{'display': 'flex'}}>
            <Input type="button" value={messages.male.defaultMessage} style={{border: "1px solid #84C1CA", background: "#a4e1eA"}} onClick={() => {
              gender = "Male";
            }}></Input>
            <Input type="button" value={messages.female.defaultMessage} style={{border: "1px solid #FAACD8", background: "#FAcCf8"}} onClick={() => {
              gender = "Female";
            }}></Input>
            <Input type="button" value={messages.both.defaultMessage} onClick={() => {
              gender = "Both";
            }}></Input>
          </div>
          <Input type="submit" value={messages.submit.defaultMessage}></Input>
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
    addBabyName: (name, gender, babyNames, appId) => {
      firebase.addBabyName(name, gender, babyNames, appId);
    },
    returnToMainMenu: () => {
      dispatch(selectMenu(''));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBabyName);
