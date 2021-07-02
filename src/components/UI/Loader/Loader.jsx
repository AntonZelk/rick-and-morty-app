import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.center}>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
        <div className={classes.wave}></div>
      </div>
    </div>
  );
};

export default Loader;
