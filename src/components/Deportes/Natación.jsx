import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorySport } from '../../redux/Actions/Action';
// import CardSport from '../CardDeporte/CardSport';
import SportCard from '../CardSport/SportCard';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import NavBar from '../../navbar/navbar';
import Barra from '../../Barra/Barra';
import PuffLoader from 'react-spinners/PuffLoader';
import './Natación.css';

export default function Natacion() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const activities = useSelector(state => state.categorySport)
  const render = useSelector(state => state.defaultCategorySport)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(getCategorySport())
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <PuffLoader
          className="loader"
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
          <div className="encabezadoN">
            <h1 className="h2">Natación</h1>
          </div>
          <Barra />
          <div className="sportCardContainer">
            {render?.map((activity, i) => {
              if (activity.sport.name === "Natacion") return (
                <SportCard
                  key={i}
                  sport={activity}
                />
              )
            })}
          </div>
          {/* <CardSport /> */}
          <div className="inscibirse">
            <div className="title2">¿No estas registrado? </div>
            <div className="opciones">
              <div className="tres">
                <div className="dos">
                  Te recordamos que para inscribirte en una actividad deportiva
                  es requisito registrarte. Podes registrarte
                  <Link to="/register"> AQUÍ</Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
