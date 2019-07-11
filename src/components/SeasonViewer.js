import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = {
  container: {
    color: '#fff',
  },
};

function SeasonViewer({
  match, location, history, classes,
}) {
  const [sauces, setSauces] = React.useState([]);
  React.useEffect(() => {
    console.log('mounted!');
  }, []);
  return <div className={classes.container}>Individual SeasonViewer!</div>;
}

SeasonViewer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(SeasonViewer);
