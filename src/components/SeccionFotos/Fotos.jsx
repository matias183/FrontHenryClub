import React, { useEffect, useState } from 'react';
import NavBar from '../../navbar/navbar';
import { useDispatch, useSelector } from 'react-redux';
import S from '../SeccionFotos/Fotos.module.css';
import Footer from '../footer/footer.jsx';
import PuffLoader from 'react-spinners/PuffLoader';
import { getGallery } from '../../redux/Actions/Action';
export default function Fotos() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const fotos = useSelector(state => state.images);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery())
  }, [dispatch])

 
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
          <div className={S.contenedor}>
          {fotos.map(e => {
              return (
                <div className='containerFoto'>
                  {e.name}
                 <img src={e.image} key={e.id} id={e.id}/> 
                  {e.album.name}
               </div>
                );
            })}</div>
              {console.log(fotos)}
          <div>
            <Footer />
          </div>
        </div>
       )} 
    </div>
  );
}
