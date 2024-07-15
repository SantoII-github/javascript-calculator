import { useState } from 'react'
import { evaluate } from 'mathjs'
import CalcButton from "./CalcButton";
import Display from "./Display";

function Calculator(props) {
    const [formula, setFormula] = useState("");
    const [lastInput, setLastInput] = useState(null);
    const [currentVal, setCurrentVal] = useState("0");
    const [display, setDisplay] = useState("0");

    const handleNumber = (num) => {
      if (num == "0" && currentVal == "0") {
        return;
      } else if (currentVal == "0") {
        setCurrentVal(num);
        setFormula(formula + num);
        setDisplay(num);
        setLastInput(num);
      }  else {
        setFormula(formula + num);
        setDisplay(display + num);
        setCurrentVal(currentVal + num);
        setLastInput(num);
      }
    }

    const handleOperator = (operator) => {
      if ((lastInput == "+" || lastInput == "*" || lastInput == "/" || lastInput == "-") && operator != "-") {
        setCurrentVal("0");
        setDisplay("0");
        // This regex matches any operators at the end of the string.
        setFormula(formula.replace(/[+\-*/]+$/, "") + operator);
        setLastInput(operator);
      } else { 
        setCurrentVal("0");
        setDisplay("0");
        setFormula(formula + operator);
        setLastInput(operator);
      }
    }

    const handleDecimal = () => {
      if (currentVal.includes(".")) {
        return;
      } else {
        setCurrentVal(currentVal + ".");
        setFormula(formula + ".");
        setDisplay(display + ".");
        setLastInput(".");
      }
    }

    const handleClear = () => {
      setFormula("");
      setLastInput(null);
      setCurrentVal("0");
      setDisplay("0");
    }

    const handleCalc = () => {
      const result = evaluate(formula);
      setFormula(result);
      setDisplay(result);
      setLastInput("=");
    }

    return (
      <div id="calculator">
        <Display formula={formula} display={display}/>
        <CalcButton id="clear" content="AC" function={() => handleClear()}/>

        <CalcButton id="one" content="1" function={() => handleNumber("1")}/>
        <CalcButton id="two" content="2" function={() => handleNumber("2")}/>
        <CalcButton id="three" content="3" function={() => handleNumber("3")}/>
        <CalcButton id="divide" content="/" function={() => handleOperator("/")}/>

        <CalcButton id="four" content="4" function={() => handleNumber("4")}/>
        <CalcButton id="five" content="5" function={() => handleNumber("5")}/>
        <CalcButton id="six" content="6" function={() => handleNumber("6")}/>
        <CalcButton id="multiply" content="X" function={() => handleOperator("*")}/>

        <CalcButton id="seven" content="7" function={() => handleNumber("7")}/>
        <CalcButton id="eight" content="8" function={() => handleNumber("8")}/>
        <CalcButton id="nine" content="9" function={() => handleNumber("9")}/>
        <CalcButton id="add" content="+" function={() => handleOperator("+")}/>

        <CalcButton id="zero" content="0" function={() => handleNumber("0")}/>
        <CalcButton id="decimal" content="." function={() => handleDecimal()}/>
        <CalcButton id="equals" content="=" function={() => handleCalc()}/>
        <CalcButton id="subtract" content="-" function={() => handleOperator("-")}/>
      </div>
    );
  }
  
  export default Calculator;
  