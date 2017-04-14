/*
 *
 * PersonChooser
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import firebase from 'firebase';

import { setPersonChooser } from './actions';
import makeSelectPersonChooser from './selectors';
import messages from './messages';

export class PersonChooser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { personChooser, onButtonClick } = this.props;

    if (!personChooser) {
      return (
        <div>
          <h1>
            <FormattedMessage {...messages.title} />
          </h1>

          <form>
            <input type="button" value={messages.grace.defaultMessage} onClick={() => {
              onButtonClick("Grace"); 
            }}></input>
            <input type="button" value={messages.joe.defaultMessage} onClick={() => {
              onButtonClick("Joe"); 
            }}></input>
          </form>
        </div>
      );
    }
    
    return null;
  }
}

PersonChooser.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  personChooser: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    personChooser: state.toObject().personChooser,  
  } 
}


function mapDispatchToProps(dispatch) {
  return {
    onButtonClick: (name) => {
      dispatch(setPersonChooser(name));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonChooser);
