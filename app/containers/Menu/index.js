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

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { menuState, user, onButtonClick, onBackButtonClick, onListButtonClick } = this.props;

    if (user) {
      if (!menuState) {
        return (
          <div>
            <h1><FormattedMessage {...messages.header} /></h1>

            <form>
              <input type="button" value={messages.addBabyName.defaultMessage} onClick={() => {
                onButtonClick("addBabyName")
              }}></input>

              <input type="button" value={messages.rateBabyName.defaultMessage} onClick={() => {
                onButtonClick("rateBabyName")
              }}></input>          

              <input type="button" value={messages.listBabyNames.defaultMessage} onClick={() => {
                onButtonClick("listBabyNames")
              }}></input>

            </form>
          </div>
        );
      }

      if (menuState === "rateBabyName") {
        return (
          <form>
            <input type="button" value={messages.back.defaultMessage} onClick={() => {
              onBackButtonClick();
              onButtonClick("");
            }}></input>

            <input type="button" value={messages.listBabyNames.defaultMessage} onClick={() => {
              onListButtonClick();
            }}></input>
          </form>
        );
      }

      return (
        <form>
          <input type="button" value={messages.back.defaultMessage} onClick={() => {
            onBackButtonClick();
            onButtonClick("");
          }}></input>
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
    },

    onListButtonClick: () => {
      dispatch(babyNameInEditState(""));
      dispatch(filter('All'));
      dispatch(selectMenu("listBabyNames"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
