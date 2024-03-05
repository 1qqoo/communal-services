import React from 'react';
import './News.css';
import NewsCard from '../NewsCard/NewsCard';
import news from '../../utils/constants';

export default function News() {
  return (
    <section className='news'>
        {/* <button>Тестовая кнопка</button> */}
        <div className='news__container'>
            {news.map((item) => {
                return <NewsCard
                    link={item.url}
                    image={item.image}
                    title={item.title}
                    description={item.description} 
                    key={item.id}
                />
            })  
            }
        </div>
    </section>
  )
}
