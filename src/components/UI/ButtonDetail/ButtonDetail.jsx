import classes from './ButtonDetail.module.scss';

const ButtonDetail = ({ name, onClick }) => {
  return (
    <>
      <button className={classes.btn}>{name}</button>
    </>
  );
};

export default ButtonDetail;
