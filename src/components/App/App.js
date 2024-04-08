import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import News from '../News/News.js';

// import { getNews } from '../../utils/NewsApi.js';

import { PageProvider } from '../../contexts/PageContext.js';
import { Route, Routes } from 'react-router-dom';
import Documents from '../Documents/Documents.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register';
import ProtectedRouteElement from '../../utils/ProtectedRoute';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [news, setNews] = useState([]);

  // async function getAllNews() {
  //   try {
  //     const items = await getNews();
  //     setNews(items.articles.slice(0, 10));
  //     console.log(news);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <PageProvider>
      <div className='body'>
        <Header />
        <Routes>
          <Route element={<ProtectedRouteElement isLoggedIn={!isLoggedIn}/>}>
            <Route 
              path="/signin"
              element={<Login />}
            />
          </Route>
          <Route element={<ProtectedRouteElement isLoggedIn={!isLoggedIn}/>}>
            <Route 
              path="/signup"
              element={<Register />}
            />
          </Route>
          <Route element={<ProtectedRouteElement isLoggedIn={isLoggedIn}/>}>
            <Route
              path="/"
              element={<Main />}
            />
          </Route>
          <Route element={<ProtectedRouteElement isLoggedIn={isLoggedIn}/>}>
            <Route
              path="/news"
              element={
                <News
                // getAllNews={getAllNews}
                // news={news}
                />
              }
            />
          </Route>
          <Route element={<ProtectedRouteElement isLoggedIn={isLoggedIn}/>}>
            <Route
              path="/documents"
              element={<Documents />}
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </PageProvider>
  );
};

export default App;
