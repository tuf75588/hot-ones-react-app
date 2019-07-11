import React, { useState } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  sideBar: {
    width: '250px',
    height: '100%',
    overflowY: 'scroll',
  },
  seasonButton: {
    color: 'yellow',
    border: '2px solid red',
    borderRadius: '5px',
    minWidth: '100px',
    fontSize: '2em',
    margin: '1em',
    padding: '0.25em',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: "'Allerta Stencil', sans-serif",
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'yellow',
      color: '#000',
    },
  },
};
function SeasonSelector({ classes, seasons }) {
  return (
    <div className={classes.sideBar}>
      {seasons
        && seasons.map((_, i) => (
          <div className={classes.seasonButton} key={i}>
            <Link to={`/seasons/${i + 1}`}>
              Season
              {i + 1}
            </Link>
          </div>
        ))}
    </div>
  );
}

SeasonSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  seasons: PropTypes.shape([]).isRequired,
};
export default injectSheet(styles)(SeasonSelector);
