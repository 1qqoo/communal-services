import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import News from '../News/News.js';
import Navigation from '../Navigation/Navigation.js';

// import { getNews } from '../../utils/NewsApi.js';

import { PageProvider } from '../../contexts/PageContext.js';
import { Route, Routes } from 'react-router-dom';
import Documents from '../Documents/Documents.js';
import Login from '../Login/Login.js';

const App = () => {
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
        <Login />
        {/* <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/news"
            element={
              <News
              // getAllNews={getAllNews}
              // news={news}
              />
            }
          />

          <Route
            path="/documents"
            element={<Documents />}
          />
        </Routes> */}
        <Footer />
      </div>
    </PageProvider>
  );
};

export default App;
