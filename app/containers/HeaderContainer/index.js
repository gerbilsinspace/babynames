/*
 *
 * HeaderContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Header from 'components/Header';
import HeaderInner from 'components/HeaderInner';

import messages from './messages';

export class HeaderContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Header>
        <HeaderInner>
          <FormattedMessage {...messages.appName} />
        </HeaderInner>
      </Header>
    );
  }
}

HeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
