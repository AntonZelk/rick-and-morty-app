import classes from './Button.module.scss';

const Button = ({ name, onClick, disabled }) => {
  return (
    <>
      <button className={classes.button} onClick={onClick} disabled={disabled}>
        <div className={classes.hola}>
          <span>{name}</span>
        </div>
      </button>
    </>
  );
};

export default Button;
