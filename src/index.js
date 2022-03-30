import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import About from './components/views/about';
import Articles from './components/views/articles';
import LandIndex from './components/views/land_index';
import Article from './components/views/article';
import Notfound from './components/views/notfound';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index path='/' element={<LandIndex/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='articles' element={<Articles/>}/>
        <Route path='articles/:articleId' element={<Article/>}/>
        <Route path='*' element={<Notfound/>}/>   
      </Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
