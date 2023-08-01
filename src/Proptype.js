/*
컴포넌트로 만들어진 함수는 다른데서 재사용 가능
리액트는 
*/
function Animals(props){
  return (
    <p>
      <hi>고양이와 {props.name}</hi>
    </p>
  );
}

function Proptype() {
  return (
    <div>
      <Animals name="사자"/>
    </div>
  );  
}
export default Proptype;