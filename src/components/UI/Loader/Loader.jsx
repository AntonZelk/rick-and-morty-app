import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <span>Loading</span>
      </div>
    </>
  );
};

export default Loader;
