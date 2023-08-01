import{useState} from "react";

function Namechange(){
    const [name,setName]=useState(name2);
    const handleChange=(event)=>{
       setName(event.target.value); 
    }
    const handleChange2 =()=>{
        setName(name2);
    }

    return (
        <div>
            <div>
                <b>{name}에서</b>
                <p>{name2}로</p>
            </div>

            <input onChange={handleChange} value={name}/>
            <button onClick={handleChange2}>변경~</button>
        </div>
    );
}
export default Namechange;