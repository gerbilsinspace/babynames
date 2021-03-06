/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PersonChooser from 'containers/PersonChooser';
import Menu from 'containers/Menu';
import BabyName from 'containers/BabyName';
import ArticleContainer from 'containers/ArticleContainer';
import AppContainer from 'components/AppContainer';
import HeaderContainer from 'containers/HeaderContainer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<AppContainer>
        <HeaderContainer />
        <ArticleContainer>
	      	<Menu />
	      	<BabyName />
		    </ArticleContainer>
		  </AppContainer>
    );
  }
}
