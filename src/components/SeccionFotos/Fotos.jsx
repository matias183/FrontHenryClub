import React, { useEffect, useState } from 'react';
import NavBar from '../../navbar/navbar';
import { Link } from 'react-router-dom';
import S from '../SeccionFotos/Fotos.module.css';
import Footer from '../footer/footer.jsx';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Fotos() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={S.contenedorGeneral}>
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

          <h1 className={S.tituloGaleria}>Galeria de imagenes</h1>
          <div className={S.contenedor}></div>

          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
