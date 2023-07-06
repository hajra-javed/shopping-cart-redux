import background from '../../assets/background.jpg'
import style from './Home.module.css';
import React from 'react';
import { useEffect, memo} from 'react';

function Home(props){

    useEffect(()=>{
        props.initiated('home');
    });

    return(
        <div className={`${style.home} ${props.className}`}>
            <img className={style.background} src={background} alt="" />
            <div className={style.text}>Elevate your tastebuds with our most tempting treats stuffed with pure goodness!</div>
        </div>
    )
};

export default memo(Home);