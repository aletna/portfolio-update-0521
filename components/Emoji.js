const Emoji = (props) => {
  return (
    <span
      className="emoji p-2 "
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};
export default Emoji;
