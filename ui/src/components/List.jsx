import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mulher from '../img/img-mulher.png';


const List = () => {
    const [maravilhosas, setMaravilhosas] = useState([]);

    function ordenarPorNome(a, b){
        if(a.nameme>b.name){
            return 1
        }

        if(a.name < b.name){
            return -1
        }

        return 0
    }

    useEffect(()=>{
       fetch("http://localhost:5555/maravilhosas")
           .then(res => res.json())
           .then((res) => setMaravilhosas(res))
    },[])

    return (
        <main>
            <section className="maravilhosas container" id="mulheres-maravilhosas">
                <h3 className="maravilhosas__titulo">Veja todas as mulheres maravilhosas desse projeto!</h3>
                <div className="maravilhosas__box">
                    {maravilhosas.sort(ordenarPorNome).map(maravilhosa => {
                        return (
                        <div key={maravilhosa.id} className="maravilhosas__perfil">
                            <Link to={`/profile/${maravilhosa.id}`}>
                                <img className="img-responsive" src={mulher} alt="Imagem de uma mulher poderosa"/>
                                <p>{maravilhosa.name}</p>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </section>
    </main>
    )
}
export default List;