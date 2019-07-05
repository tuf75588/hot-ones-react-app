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
levels.push(fire);

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
// level 8 135,600 to 625,000
// level 8 625,001 to 1000000
// level 9 100000+

const ranges = {
  0: {
    min: 0,
    max: 2200,
  },
  1: {
    min: 2201,
    max: 4000,
  },
  2: {
    min: 4001,
    max: 9000,
  },
  3: {
    min: 9001,
    max: 30000,
  },
  4: {
    min: 30001,
    max: 40000,
  },
  5: {
    min: 40001,
    max: 71000,
  },
  6: {
    min: 71001,
    max: 135599,
  },
};

function getLevel(scoville) {
  return levels.filter((level, i) => level === scoville);
}

function ScovilleMeter({ classes, scovilles }) {
  return (
    <div className={classes.meter}>
      {scovilles}
      <img src={Pepper} alt="svg for logo" className={classes.level} />
      {levels.map((level, i) => (
        <img src={level} alt="level svg" key={i} className={classes.level} />
      ))}
    </div>
  );
}

ScovilleMeter.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  scovilles: PropTypes.number.isRequired,
};

export default injectSheet(styles)(ScovilleMeter);
