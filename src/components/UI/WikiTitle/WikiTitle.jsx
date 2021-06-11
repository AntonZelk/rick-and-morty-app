import classes from './WikiTitle.module.scss';

const WIkiTitle = ({ fastClicker, flicker, firsPart, secondPart }) => {
  return (
    <h1 className={classes.sign}>
      <span className={classes.fastFlicker}>{fastClicker}</span>
      {firsPart}
      <span className={classes.flicker}>{flicker}</span>
      {secondPart}
    </h1>
  );
};

export default WIkiTitle;
