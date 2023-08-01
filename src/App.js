import logo from './logo.svg';
import { useState } from 'react';

function App() {
  /*
  여기에 script 작성한다
  css,js활동 적기도 함
  변수선언,상태변경은 여기에서 진행

  useState : 상태값 관리자 초기값세팅/값변환 가능
  import { useState } from 'react';를 임포트해준다

  state
    - 컴포넌트 내부에서 선언한 값
    - setState를 통해 내부값 변경가능
  */


  // let count = 0;

//const [useState(0),변환될 값] = 초기값;
  const [number      ,setNumber] = useState(0);

  const plus = () =>{
    // count = count+1
    setNumber(number+1);
    console.log(number);
  }
  const minus = () =>{
    // count = count-1
    setNumber(number-1);
    console.log(number);
  }

  return (
    /*여기엔 html만 적는다. 보이는 거 뿌리는 곳*/
    <div className="App">
      {/*   
        <div className="App">은 <html>태그와 비슷한 역할을 함

        js에서랑 다름
        리액트에서 onClick={}

        위에서 선언한 변수값 갖고오기 위해서는
        {}중괄호 사용해 변수값 넣기
      */}  
      <h2>{number}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>


    </div>
  );
}

export default App;
