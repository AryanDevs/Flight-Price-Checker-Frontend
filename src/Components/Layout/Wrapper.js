import classes from "./wrapper.module.css";

const Wrapper = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};

export default Wrapper;
