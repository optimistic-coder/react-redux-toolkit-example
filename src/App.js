import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { AddTodo } from './redux-toolkit/listSlice';
import { useSelector, useDispatch } from "react-redux";
import List from './component/List';
import Api from './component/Api'
function App() {
    return ( <div className = "App">
      
      <Api/>
          </div > );
}

export default App;