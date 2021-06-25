// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZgzPmS1xf1dTYbuowCZ6knTCwz1iV74",
  authDomain: "react-todo-list-828bf.firebaseapp.com",
  projectId: "react-todo-list-828bf",
  storageBucket: "react-todo-list-828bf.appspot.com",
  messagingSenderId: "273143837543",
  appId: "1:273143837543:web:179088dd7ccda8b000f5c2",
  measurementId: "G-GZXLM3P5R3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import "firebase/auth";
import "firebase/firestore";
import "./HomePage.css";
import "./ListPage.css"
import React from 'react';
import ReactDOM from 'react-dom';
import ListPage from "./components/ListPage.js";
import HomePage from "./components/HomePage.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <>
      <Router>
          <Route path="/" exact component={HomePage}/>
          <Route path="/list" component={ListPage}/>
      </Router>
  </>,
  document.getElementById('root')
);
