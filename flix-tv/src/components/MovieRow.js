import React from 'react';
import './MovieRow.css';

export default({title,items}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items.results.map((item,key)=>{
                   return (<img alt="filme" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>)
                })}
            </div>
        </div>
    );
}