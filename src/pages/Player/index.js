import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

//El fragment es necesario para poder renderizar varios elementos a la vez con React
function Player() {
    const [video, setVideo] = useState([])

    const parametros = useParams()
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/IlledNacu/alura-cinema/videos?id=${parametros.id}`)
        .then(response=>response.json())
        .then(data=>{setVideo(...data)})
    }, [])

    if(!video){
        return <NotFound />
    }

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Titulo>
                <h1>Reproductor</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;