
function Display(props) {
    return (
      <div id="output">
          <span id="formula">{props.formula}</span>
          <br />
          <span id="display">{props.display}</span>
      </div>
    );
  }
  
  export default Display;
  