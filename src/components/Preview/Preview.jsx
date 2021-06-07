import React from 'react';

import classes from './Preview.module.scss';

const Preview = () => {
  return (
    <React.Fragment>
      <section className={classes.container}>
        <img className={classes.cosmos} src="/img/cos.gif" alt="cosmos" />
        <div className={classes.preview}>
          <div className={classes.row}>
            <div className={classes.text}>
              <div className={classes.rowText}>
                <img src="./img/rick.png" alt="rick" />
                <img src="./img/and.png" alt="and" />
                <img src="./img/morty.png" alt="morty" />
              </div>
            </div>
            <img className={classes.planet} src="./img/planet.png" alt="" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Preview;
