/*
 *
 * BabyName
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import List from 'containers/List';
import AddBabyName from 'containers/AddBabyName';
import EditBabyName from 'containers/EditBabyName';

import makeSelectBabyName from './selectors';
import messages from './messages';

export class BabyName extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { personChooser, menu } = this.props;

    if (personChooser) {
      if (menu === "addBabyName") {
        return (<AddBabyName />);
      } else if (menu === "rateBabyName") {
        return (<EditBabyName />);
      } else if (menu === "listBabyNames") {
        return (
          <List />
        );
      }

      return null;
    }

    return null;
  }
}

BabyName.propTypes = {

};

function mapStateToProps(state) {
  return {
    personChooser: state.toObject().personChooser,
    menu: state.toObject().menu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BabyName);
