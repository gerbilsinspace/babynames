/*
 *
 * Menu
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { selectMenu } from './actions';
import { babyNameInEditState } from 'containers/EditBabyName/actions';
import { filter } from 'containers/Filter/actions';
import { genderFilter } from 'containers/GenderFilter/actions';
import Input from 'components/Input';
import firebase from 'data/firebase';

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { menuState, user, onButtonClick, onBackButtonClick, onListButtonClick } = this.props;

    if (user) {
      if (!menuState) {
        return (
          <form style={{'display': 'flex', 'flexDirection': 'column'}}>
            <Input type="button" value={messages.addBabyName.defaultMessage} onClick={() => {
              onButtonClick("addBabyName")
            }}></Input>

            <Input type="button" value={messages.rateBabyName.defaultMessage} onClick={() => {
              onButtonClick("rateBabyName")
            }}></Input>          

            <Input type="button" value={messages.listBabyNames.defaultMessage} onClick={() => {
              onButtonClick("listBabyNames")
            }}></Input>

            <Input type="button" value={messages.logout.defaultMessage} onClick={() => {
              firebase.logout();
            }}></Input>
          </form>
        );
      }

      if (menuState === "rateBabyName") {
        return (
          <form>
            <Input type="button" value={messages.back.defaultMessage} style={{marginRight: "10px"}}onClick={() => {
              onBackButtonClick();
              onButtonClick("");
            }}></Input>

            <Input type="button" value={messages.listBabyNames.defaultMessage} onClick={() => {
              onListButtonClick();
            }}></Input>
          </form>
        );
      }

      return (
        <form>
          <Input type="button" value={messages.back.defaultMessage} onClick={() => {
            onBackButtonClick();
            onButtonClick("");
          }}></Input>
        </form>
      );
    }
    
    return null;
  }
}

Menu.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    menuState: state.toObject().menu,
    user: state.get('user')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (link) => {
      dispatch(selectMenu(link));
    },

    onBackButtonClick: () => {
      dispatch(babyNameInEditState(""));
      dispatch(filter('All'));
      dispatch(genderFilter('Both'));
    },

    onListButtonClick: () => {
      dispatch(babyNameInEditState(""));
      dispatch(filter('All'));
      dispatch(genderFilter('Both'));
      dispatch(selectMenu("listBabyNames"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
