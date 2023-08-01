import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*임포트한 후에 사용가능 */
import App from './App';
import AppInput from './AppInput';
import AppTime from './AppTime';
import Proptype from './Proptype';
import UserList from './UserList';
import AnimalsList from './AnimalList';
import reportWebVitals from './reportWebVitals';
import Inputmain from './Inputmain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppInput />
    <AppTime />
    <Proptype />
    <Inputmain/>
    <UserList />
    <AnimalsList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
