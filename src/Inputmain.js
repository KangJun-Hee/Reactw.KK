import { useState } from "react";

//컴포넌트(객체)를 만드는 거다~
function Inputmain(){
    const[text,setText] = useState("");
    const handleChange = (event) =>{
        //변환될 값
        setText(event.target.value);
    }
    const handleReset = () =>{
        setText("");
    }

    return(
        <div>
            <div>
                <b>값:{text}</b>
            </div>

            <input onChange={handleChange} value={text}/>
            <button onClick={handleReset}>초기화</button>
        </div>
    );
}
export default Inputmain;