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
import { editBabyName } from 'containers/EditBabyName/actions';

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { menu, personChooser, onButtonClick, onBackButtonClick } = this.props;

    if (personChooser) {
      if (!menu) {
        return (
          <div>
            <h1>Menu</h1>

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
    menu: state.toObject().menu,
    personChooser: state.toObject().personChooser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (link) => {
      dispatch(selectMenu(link));
    },

    onBackButtonClick: () => {
      dispatch(editBabyName(""));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
