/*
 *
 * ListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { editBabyName } from 'containers/EditBabyName/actions';
import { selectMenu } from 'containers/Menu/actions';

import messages from './messages';

class IncludedListItem extends React.PureComponent {
  render () {
    const { name, gender, Grace, Joe, onEditButtonClick } = this.props;
    
    let borderStyling = "1px solid #ddd";
    let backgroundStyling = "#fff";

    if (gender === "Male") {
      borderStyling = "1px solid #84C1CA";
      backgroundStyling = "#a4e1eA";
    } else if (gender === "Female") {
      borderStyling = "1px solid #FAACD8";
      backgroundStyling = "#FAcCf8";
    }

    return (
      <li style={{margin: "10px", border: borderStyling, padding: "10px", borderRadius: "3px", display: "inline-block", background: backgroundStyling}}>
        <h2 style={{padding: "0"}}>{name} <small><input style={{background: "#fff", margin: '0'}} type="button" value="Edit" onClick={() => {
          onEditButtonClick(name)
        }}></input></small></h2>
        <p><FormattedMessage {...messages.femaleName} />: {Grace}</p>
        <p><FormattedMessage {...messages.maleName} />: {Joe}</p>
      </li>
    );
  }
}

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, gender, Grace, Joe, filter, genderFilter, onEditButtonClick } = this.props;

    if (filter === "All") {
      if (genderFilter === "Both") {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      if ((genderFilter === "Female") && (gender === "Female")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      if ((genderFilter === "Male") && (gender === "Male")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if ((filter === "Love") && ((Grace === "Love") && (Joe === "Love"))) {
      if (genderFilter === "Both") {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      if ((genderFilter === "Female") && (gender === "Female")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      if ((genderFilter === "Male") && (gender === "Male")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }


    if (filter === "LikeAndLove") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        if (genderFilter === "Both") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        if ((genderFilter === "Female") && (gender === "Female")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        if ((genderFilter === "Male") && (gender === "Male")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        return null;
      }

      return null;
    }

    if (filter === "Other") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        if (genderFilter === "Both") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        if ((genderFilter === "Female") && (gender === "Female")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        if ((genderFilter === "Male") && (gender === "Male")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }

        return null;
      }

      return null;
    }

    return null;
  }
}

ListItem.propTypes = {
};

function mapStateToProps(state) {
  return {
    filter: state.toObject().filter,
    genderFilter: state.toObject().genderFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onEditButtonClick: (nameToEdit) => {
      dispatch(editBabyName(nameToEdit));
      dispatch(selectMenu('rateBabyName'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
