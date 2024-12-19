import { useRef, useState } from "react"

export function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = (e)=> {
        e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
};
const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
};
const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
};
const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
};

const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
};

const resetResult = (e) => {
    e.preventDefault();
    resetResult((prevVal) => prevVal * 0);
};


return (
    <div >
        <div>
            <h1>Shopping Calculator</h1>
        </div>
        <form>
            <p ref={resultRef}>{result}</p>
            <input
                pattern="[0-9]"
                ref={inputRef}
                type="number"
                placeholder="type a number"
            /><br/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>- </button>        
            <button onClick={times}>*</button>                 
            <button onClick={divide}>  /      </button>            
            <button onClick={resetInput}>reset input       </button>   
            <button onClick={resetResult}>reset result       </button>         
        </form>
    </div>

);
  }