/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data';





// eslint-disable-next-line react/prop-types
const TitleCards = ({title, category}) => {

    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef();



    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzk1MjBkZjNjZDVkMzAzM2E1M2Q5OGVkOWY0ZmIwMiIsIm5iZiI6MTc0MDQxNTE0Mi42MjcsInN1YiI6IjY3YmNhMGE2MjNmZTExN2VlNmE0NzI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DU4wVVHy37LAGJ7Ju1X0s_V9Yohv7ZbPqMCLVIDwfg'
        }
      };
      



    const handleWheel = (event) =>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])


    return (
        <div className='title-cards'>
            <h2>
                {title?title:"Popular on NetFlix"}
            </h2>
            <div className='card-list' ref={cardsRef}>
                {apiData.map((card, index) => {
                    return  <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t//p/w500/${card.backdrop_path}`} alt='' />
                        <p>{card.original_title}</p> 
                    </div>
                })}
            </div>
        </div>
    );
};

export default TitleCards;