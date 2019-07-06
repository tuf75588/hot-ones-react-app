import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Pepper from '../images/pepper.svg';
import fire from '../images/fire.svg';

const levels = [];

for (let i = 1; i <= 11; i += 1) {
  // eslint-disable-next-line
  const image = require(`../images/${i.toString().padStart(2, '0')}.svg`);
  levels.push(image);
}

const styles = {
  meter: {
    position: 'relative',
    width: '30%',
  },
  level: {
    position: 'absolute',
    width: '100%',
  },
};
// min scoville will be 450
// max scoville will be 2000000

// scoville range units
// level-1 == 0 to 2200;
// level 2 === 2201 to 4000
// level 3 ==== 4001 to 9000
// level 4 ===  9001 to 30000
// level 5 ===  30001 to 40000
// level 6 40001 to 71000
// level 7 70001 to 135.599
// level 8 135600 to 356999
// level 9 357000 to 625000
// level 10 625000 to 1000000
// level 11 1000000+

const mins = [0, 2201, 4001, 9001, 30001, 40001, 71001, 135600, 357000, 625001, 1000001];

function getLevels(scovilles) {
  const allLevels = levels.filter((level, i) => scovilles >= mins[i]);
  if (scovilles >= 1000001) {
    allLevels.push(fire);
  }
  return allLevels;
}

function ScovilleMeter({ classes, scovilles }) {
  return (
    <div className={classes.meter}>
      {scovilles}
      <img src={Pepper} alt="svg for logo" className={classes.level} />
      {getLevels(scovilles).map(level => (
        <img src={level} alt="level svg" key={level} className={classes.level} />
      ))}
    </div>
  );
}

ScovilleMeter.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  scovilles: PropTypes.number.isRequired,
};

export default injectSheet(styles)(ScovilleMeter);
