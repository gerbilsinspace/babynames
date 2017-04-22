/*
 *
 * NameForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import firebase from 'data/firebase';

import AppContainer from 'components/AppContainer';
import HeaderContainer from 'containers/HeaderContainer';
import ArticleContainer from 'containers/ArticleContainer';
import H1 from 'components/H1';
import Form from 'components/Form';
import Input from 'components/Input';
import ButtonBox from 'components/ButtonBox';

import { updateUser } from 'containers/User/actions';

import messages from './messages';

export class NameForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(id, cb) {
    cb(id, this.state.name);
  }

  render() {
    const { id, onUpdateUser } = this.props;

    return (
      <AppContainer>
        <HeaderContainer />
        <ArticleContainer>
          <H1><FormattedMessage style={{"lineHeight": "60px", "display": "inline-block"}} {...messages.header} /></H1>
          <Form>
            <Input type="text" placeholder="Name" onChange={this.handleNameChange}></Input>
            <ButtonBox>
              <Input type="button" value="Save Name" onClick={() => {
                this.handleSubmit(id, onUpdateUser);
              }}></Input>
            </ButtonBox>
          </Form>
        </ArticleContainer>
      </AppContainer>
    );
  }
}

NameForm.propTypes = {
};


function mapDispatchToProps(dispatch) {
  return {
    onUpdateUser: (id, name) => {
      firebase.updateUserInDatabase(id, name);
    } 
  };
}

export default connect(null, mapDispatchToProps)(NameForm);
