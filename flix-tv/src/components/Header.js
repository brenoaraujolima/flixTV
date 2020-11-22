import React from 'react';
import './Header.css';
import logo from './flixTV.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ' '}>
            <div className="header--logo">
                <a href="/">
                    <img alt="flixTV" src={logo}/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSg737_G5DZZd0BVaWjTaRCjNg83a7zJWQiQ&usqp=CAU"/>
                </a>
            </div>
        </header>
    );
}
