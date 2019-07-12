import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import SauceViewer from './SauceViewer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    color: 'yellow',
    width: '100%',
    height: '100%',
  },

  bottles: {
    display: 'flex',
    justifyContent: 'center',
  },
  selectedSauce: {
    height: '70%',
  },
  img: {
    height: '200px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

function SeasonViewer({ match, classes }) {
  const {
    // eslint-disable-next-line react/prop-types
    params: { season },
  } = match;
  const [sauces, setSauces] = React.useState([]);

  React.useEffect(() => {
    const sauceList = require(`../sauces/season_${season}`);
    setSauces(sauceList);
  }, [season]);
  return (
    <div className={classes.container}>
      <div className={classes.selectedSauce}>upper</div>
      <div className={classes.bottles}>
        {sauces
          && sauces.map(({ name, id, img_url }) => (
            <Link
              to={{
                pathname: `${match.url}/sauces/${id}`,
                state: sauces,
              }}
            >
              <img key={id} className={classes.img} src={img_url} alt={name} />
            </Link>
          ))}
      </div>
    </div>
  );
}

SeasonViewer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  season: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(SeasonViewer);
