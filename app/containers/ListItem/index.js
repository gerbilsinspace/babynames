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

    return (
      <li style={{margin: "10px", border: "1px solid #ddd", padding: "10px", borderRadius: "3px", display: "inline-block"}}>
        <h2>{name} <small><input type="button" value="Edit" onClick={() => {
          onEditButtonClick(name)
        }}></input></small></h2>
        <p>{gender}</p>
        <p>Grace: {Grace}</p>
        <p>Joe: {Joe}</p>
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
      if (gender === "Male") {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }
      
      return null;
    }

    if (filter === "LoveBoy") {
      if ((Grace === "Love") && (Joe === "Love")) {
        if (gender === "Male") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "LikeAndLoveBoy") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        if (gender === "Male") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "OtherBoy") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        if (gender === "Male") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "AllGirl") {
      if (gender === "Female") {
        return (
          <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
        );
      }

      return null;
    }

    if (filter === "LoveGirl") {
      if ((Grace === "Love") && (Joe === "Love")) {
        if (gender === "Female") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "LikeAndLoveGirl") {
      if (((Grace === "Love") || (Grace === "Like")) && ((Joe === "Love") || (Joe === "Like"))) {
        if (gender === "Female") {
          return (
            <IncludedListItem name={name} gender={gender} Grace={Grace} Joe={Joe} onEditButtonClick={onEditButtonClick} />
          );
        }
      }

      return null;
    }

    if (filter === "OtherGirl") {
      if ((Grace === "Dislike") || (Joe === "Dislike")) {
        if (gender === "Female") {
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
