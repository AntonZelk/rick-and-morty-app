import classes from './FindInput.module.scss';

const FindInput = ({ name, placeholder }) => {
  const onFocusHandler = (event) => {
    event.preventDefault();
    console.log('hi');
  };
  return (
    <div className={classes.form}>
      <input
        type="input"
        className={classes.field}
        placeholder={placeholder}
        id="name"
        onFocus={onFocusHandler}
        autoComplete="off"
      />
      <label htmlFor="name" className={classes.label}>
        {name}
      </label>
    </div>
  );
};

export default FindInput;
