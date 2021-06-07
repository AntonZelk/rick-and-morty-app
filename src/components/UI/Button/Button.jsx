import classes from './Button.module.scss';

const Button = ({ name, onClick }) => {
  return (
    <>
      <button className={classes.button} onClick={onClick}>
        <div className={classes.hola}>
          <span>{name}</span>
        </div>
      </button>
    </>
  );
};

export default Button;
