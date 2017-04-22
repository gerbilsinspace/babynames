/*
 *
 * Loading
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AppContainer from 'components/AppContainer';
import HeaderContainer from 'containers/HeaderContainer';
import ArticleContainer from 'containers/ArticleContainer';
import H1 from 'components/H1';

import makeSelectLoading from './selectors';
import messages from './messages';

export class Loading extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppContainer>
        <HeaderContainer />
        <ArticleContainer>
          <H1><FormattedMessage style={{"lineHeight": "60px", "display": "inline-block"}} {...messages.header} /></H1>
        </ArticleContainer>
      </AppContainer>
    );
  }
}

Loading.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
