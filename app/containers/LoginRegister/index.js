/*
 *
 * LoginRegister
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Loading from 'containers/Loading';
import NameForm from 'containers/NameForm';
import HeaderContainer from 'containers/HeaderContainer';
import HomePage from 'containers/HomePage';
import ArticleContainer from 'containers/ArticleContainer';

import AppContainer from 'components/AppContainer';
import MenuButton from 'components/MenuButton';
import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import ButtonBox from 'components/ButtonBox';

import firebase from 'data/firebase';

import messages from './messages';

const LoginInput = styled(Input)`
  margin-right: 5px;
`;

const RegisterInput = styled(Input)`
  margin-left: 5px;
`;

export class LoginRegister extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleLoginSubmit() {
    firebase.login(this.state.email, this.state.password);
  }

  handleRegisterSubmit () {
    firebase.register(this.state.email, this.state.password);
  }

  render() {
    const { loading, user } = this.props;

    if (loading.length > 0) {
      return (<Loading />);
    }

    if ((user.id) && (!user.name)) {
      // No name set for user, get one and add it to the user 
      return (<NameForm id={user.id} />);
    }

    if (user.id) {
      return (<HomePage />);
    }

    return (
      <AppContainer>
        <HeaderContainer />
        <ArticleContainer>
          <H1><FormattedMessage style={{"lineHeight": "60px", "display": "inline-block"}} {...messages.header} /></H1>
          <Form>
            <Input type="email" placeholder="Email" onChange={this.handleEmailChange}></Input>
            <Input type="password" placeholder="Password" onChange={this.handlePasswordChange}></Input>
            <ButtonBox>
              <LoginInput type="button" value="Login" onClick={this.handleLoginSubmit}></LoginInput>
              <RegisterInput type="button" value="Register" onClick={this.handleRegisterSubmit}></RegisterInput>
            </ButtonBox>
          </Form>
        </ArticleContainer>
      </AppContainer>
    );
  }
}

LoginRegister.propTypes = {
  loading: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.get('loading').toArray(),
    user: state.get('user')
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
