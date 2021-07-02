import classes from './ButtonDetail.module.scss';

const ButtonDetail = ({ name, onClick }) => {
  return (
    <>
      <button className={classes.btn} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default ButtonDetail;
