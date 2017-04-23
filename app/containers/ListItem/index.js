/*
 *
 * ListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { babyNameInEditState } from 'containers/EditBabyName/actions';
import { selectMenu } from 'containers/Menu/actions';

import messages from './messages';

const ListItemStyling = styled.li`
  flex: 1; 
  border-radius: 2px;
  margin: 10px;
  padding: 10px;
  display: inline-block;
  flex-basis: 25%;

  @media screen and (max-width: 800px) {
    flex-basis: 45%;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 95%;
  }
`;

class IncludedListItem extends React.PureComponent {
  render () {
    const { name, gender, onEditButtonClick, ratings = []} = this.props;
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
      <ListItemStyling style={{'border': borderStyling, 'background': backgroundStyling}}>
        <h2 style={{padding: "0"}}>{name} <small><input style={{background: "#fff", margin: '0'}} type="button" value="Edit" onClick={() => {
          onEditButtonClick(name)
        }}></input></small></h2>
        <ul>
          {
            ratings.map((rating, ratingId) => {
              return (
                <li key={ratingId}>
                  {rating.name}: {rating.rating}
                </li>
              );
            })
          }
        </ul>
      </ListItemStyling>
    );
  }
}

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, gender, filter, genderFilter, onEditButtonClick, ratings = [] } = this.props;
    
    const shouldRender = () => {
      let shouldElementRender = true;

      if (genderFilter === "Female") {
        if (gender === "Male") {
          shouldElementRender = false;
        }
      } 

      if (genderFilter === "Male") {
        if (gender === "Female") {
          shouldElementRender = false;
        }
      }

      if (filter === "Love") {
        let hasAnythingOtherThanLoveBeenSeen = false;

        ratings.forEach((rating) => {
          if (rating.rating !== "Love") {
            hasAnythingOtherThanLoveBeenSeen = true;
          }
        });

        if (hasAnythingOtherThanLoveBeenSeen) {
          shouldElementRender = false;
        }
      }

      if (filter === "LikeAndLove") {
        ratings.forEach((rating) => {
          if (rating.rating === "Dislike") {
            shouldElementRender = false;
          }
        });
      }

      if (filter === "Other") {
        let hasDislikeBeenSeen = false;

        ratings.forEach((rating) => {
          if (rating.rating === "Dislike") {
            hasDislikeBeenSeen = true;
          }
        });

        if (!hasDislikeBeenSeen) {
          shouldElementRender = false;
        }
      }

      return shouldElementRender;
    }

    if (shouldRender()) {
      return (<IncludedListItem name={name} gender={gender} onEditButtonClick={onEditButtonClick} ratings={ratings} />);  
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
      dispatch(babyNameInEditState(nameToEdit));
      dispatch(selectMenu('rateBabyName'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
