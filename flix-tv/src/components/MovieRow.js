import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default({title,items}) => {
    const [scrollX, setScrollX] = useState(-400); 
    console.log("ok");
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;
        if(window.innerWidth-listW > x ) {
            x = (window.innerWidth-listW) - 60;
        }
        setScrollX(x);
    };

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.map((item,key)=>{
                        return (
                            <div key={key} className="movieRow--item">
                                <img alt="filme" src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}/>
                            </div>
                        )
                    })}
                </div>    
            </div>
        </div>
    );
}