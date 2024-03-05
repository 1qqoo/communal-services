import React from 'react';
import './NewsCard.css';

export default function NewsCard({link, image, title, description}) {
  return (
    <div className='card'>
        <a className='card__link' rel="noreferrer" href={link} target='_blank'>
            <img className='card__image' src={image} alt='Промо' />
        </a>
        <h2 className='card__title'>{title}</h2>
        <p className='card__description'>{description}</p>
    </div>
  )
}
