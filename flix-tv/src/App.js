import React, {useEffect,useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default() => {
    const [movieList, setMovieList] = useState([]);

    useEffect(()=> {
      const loadAll = async () => {
        let list = await Tmdb.getHomeList();
        setMovieList(list);
      }
      loadAll();
    },[])

    return (
      <div className="page">
        Ola,mundo!
        <section className="lists">
          {
            movieList.map((item, key)=> {
              return (<MovieRow key={key} title={item.title} items={item.items}/>)
            })
          }

        </section>
      </div>
    )
}