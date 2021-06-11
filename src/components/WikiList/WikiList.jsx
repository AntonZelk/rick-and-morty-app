import classes from './WikiList.module.scss';

const WikiList = ({ characters }) => {
  return (
    <section className={classes.wiki}>
      <div className={classes.wikiRow}></div>
    </section>
  );
};

export default WikiList;
