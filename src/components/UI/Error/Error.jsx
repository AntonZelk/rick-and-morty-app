import classes from './Error.module.scss';

const Error = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <span>Упс... Данные утеряны.</span>
      </div>
    </>
  );
};

export default Error;
