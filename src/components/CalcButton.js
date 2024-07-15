
function CalcButton(props) {
  return (
    <button id={props.id} onClick={props.function}>
        {props.content}
    </button>
  );
}

export default CalcButton;
