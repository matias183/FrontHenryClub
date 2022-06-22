import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {DetailNews} from '../../redux/Action'

export default function NewsDetail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const noticia = useSelector((state) => state.detail_news)

    useEffect(() => {
        dispatch(DetailNews(id))
    }, [dispatch, id])

    return (
        <div>
            {
                <div>
                    <h2> {noticia?.title}</h2>
                    <img src={noticia.image} alt='img not found'/>
                    <span>{noticia.subtitle}</span>
                    <p> {noticia.text} </p> 
                </div>
                
            }
        </div>
    )
}