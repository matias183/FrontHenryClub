import React, { useEffect, useState } from 'react';
import News from '../News/News';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/Actions/Action';
import S from '../SeccionNews/SeccionNews.module.css';
import NavBar from '../../navbar/navbar';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import Footer from '../footer/footer.jsx';
import PuffLoader from 'react-spinners/PuffLoader';

export default function SeccionNews() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const news = useSelector(state => state.news);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className={S.contenidoCentral}>
      {loading ? (
        <PuffLoader
          className={S.loader}
          display={'flex'}
          justify-content={'center'}
          margin={'auto'}
          align-items={'center'}
          size={200}
          background={'transparent'}
          color={'#e78345'}
          loading={loading}
        />
      ) : (
        <div>
          <NavBar />

          <SearchBar />
          <div className={S.galeria}>
            {news.map(e => {
              return (
                <News
                  key={e.id}
                  id={e.id}
                  image={e.image}
                  title={e.title}
                  subtitle={e.subtitle}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
