### `npm start`
Open [http://localhost:3000](http://localhost:3000)
만약 npm start종료하고 다시 실행시키고 싶다면
terminal에서 ctrl+c를 여러번 눌러라

### React 장점
nodejs : 패키지관리자(리액트 외에도 다양한 패키지 설치가능)
npx : 최신 패키지 설치이기 때문에 초반에 폴더 만들어 줄 때 사용하는 명령어
      npw create-react-app{폴더명}
npm : 전반적으로 빌드,테스트,스타트,인스톨 등 다방면으로 사용하는 명령어
      프로젝트 시작하는 명령어 : npm start 또는 npm run start 또는 npm run dev
      추가적 필요 패키지 설치 명령어 : npm install 패키지명
Virtual DOM이란? DOM을 추상화한 가상의 객체
SPA(Single page Application):단일 페이지로 처리
    (index.html)
웹으로 모바일 앱도 만들 수 있다~
JSX(Java Script XML):코드를 컴퓨터에 맞게 변환해준다

package.json : 간략한 사용설명서
package-lock.json : 자세히 적힌 사용설명서
README.md : 사람이 프로젝트에 대해 전반적 설명하는 곳
.gitignore : 깃허브에 파일 업로드시 말아야 할 이름,확장자를 작성

### 파일에 대해 작성
    리액트는 초반에 index.html파일만 바라봄
    index.js서 사용할 JS파일을 불러온 다음
    App.js와 같은 파일 만들어 컴포넌트 작성한다
    파일 이름은 개발자 자유다

### 폴더구조
    >node_modules : 패키지 안에 react가 들어있다
    >public : 가장 처음 보여지는 폴더
    >scr:우리가 원하는 코드 작성하는 폴더

### 컴포넌트 작성법
function 이름{
    스크립트
        const[기본값,변경될값]=초기기본값;
        const함수명=()=>{
            변경될 값
        };
    혹은 스타일 작성한다

    만약 input처럼 넣어야 할 값 있을 경우
    const 동작할 이름2 = (event) => {
        변경될 값(event.target.value);
    }

    return(
        <div>html 내용을 채워 준다</div>
    );
}
export default 이름;