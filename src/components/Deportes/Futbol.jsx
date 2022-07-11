import React, { useEffect, useState } from 'react';
import CardSport from '../CardDeporte/CardSport';
import './Futbol.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import NavBar from '../../navbar/navbar';
import Barra from '../../Barra/Barra';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Futbol() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
          <div className="encabezadoF">
            {/* <h1 className="h2">Fútbol</h1> */}
          </div>
          <div>
            <Barra />
          </div>
          <CardSport />
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
