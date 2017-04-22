/*
 *
 * ArticleContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from 'components/Article';
import ArticleInner from 'components/ArticleInner';

export class ArticleContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Article>
        <ArticleInner>
          {this.props.children}
        </ArticleInner>
      </Article>
    );
  }
}

ArticleContainer.propTypes = {
};


function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(null, mapDispatchToProps)(ArticleContainer);
