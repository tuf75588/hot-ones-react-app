import React, { useState } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: '250px',
  },
  seasonButton: {
    color: 'yellow',
    outline: '2px solid red',
    borderRadius: '3px',
    minWidth: '100px',
    fontSize: '2em',
    margin: '1em',
    padding: '0.25em',
    textAlign: 'center',
  },
};
function SeasonSelector({ classes, seasons }) {
  return (
    <div className={classes.container}>
      season list
      {seasons
        && seasons.map((_, i) => (
          <div className={classes.seasonButton} key={i}>
            Season
            {i + 1}
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
