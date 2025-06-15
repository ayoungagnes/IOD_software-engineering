import { useState } from "react";

function Calculator () {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(null);

    const doCalculate = () => {
        let calculated 
        const a = parseInt(firstNum);
        const b = parseInt(secondNum);
        switch (operator) {
            case "+": 
                calculated = a + b ;
                break;
            case "-":
                calculated = a - b;
                break;
            case "/":
                calculated = a / b;
                break;
            case "*":
                calculated = a * b;
                break;
            default:
                calculated = "invalid operator";
        }
        setResult(calculated);
    }
    return (
        <div>
        <h1>Calculator</h1>
        <label>First Number:
          <input type="number" value={firstNum} 
          onChange={(e) => setFirstNum(e.target.value)}/>
        </label>
        
        <label>Second Number:
          <input type="number" value={secondNum} 
          onChange={(e) => setSecondNum(e.target.value)}/>
        </label>

        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>
        
        <button onClick={doCalculate}>Calculate!</button>
        <p>Result: {result}</p>
        </div>
    )
}
export default Calculator;