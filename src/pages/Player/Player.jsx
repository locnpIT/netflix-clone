/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    });
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzk1MjBkZjNjZDVkMzAzM2E1M2Q5OGVkOWY0ZmIwMiIsIm5iZiI6MTc0MDQxNTE0Mi42MjcsInN1YiI6IjY3YmNhMGE2MjNmZTExN2VlNmE0NzI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DU4wVVHy37LAGJ7Ju1X0s_V9Yohv7ZbPqMCLVIDwfg'
        }
      };
      

      useEffect(() => {
         
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .then(res => console.log(res.results[0]))
        .catch(err => console.error(err));
      }, []);
     



    return (
        <div className='player'>
            <img src={back_arrow_icon} alt='' onClick={() => {navigate("/")}}/>
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className='player-info'>
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
            
        </div>
   
);
};

export default Player;