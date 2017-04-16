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
        <h2 style={{padding: "0"}}>{name} <small><input style={{background: "#fff"}} type="button" value="Edit" onClick={() => {
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
    const { name, gender, Grace, Joe, filter, onEditButtonClick } = this.props;

    if (filter === "All") {
      return (
        <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
      );
    }

    if (filter === "Love") {
      if ((Grace === "Love") && (Joe === "Love")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if (filter === "LikeAndLove") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if (filter === "Other") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if (filter === "AllBoy") {
      if ((gender === "Male") || (gender === "Both")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }
      
      return null;
    }

    if (filter === "LoveBoy") {
      if ((Grace === "Love") && (Joe === "Love")) {
        if ((gender === "Male") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "LikeAndLoveBoy") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        if ((gender === "Male") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "OtherBoy") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        if ((gender === "Male") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "AllGirl") {
      if ((gender === "Female") || (gender === "Both")) {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if (filter === "LoveGirl") {
      if ((Grace === "Love") && (Joe === "Love")) {
        if ((gender === "Female") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "LikeAndLoveGirl") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        if ((gender === "Female") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "OtherGirl") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        if ((gender === "Female") || (gender === "Both")) {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }
    
    return (
      <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
    );
  }
}

ListItem.propTypes = {
};

function mapStateToProps(state) {
  return {
    filter: state.toObject().filter,
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
