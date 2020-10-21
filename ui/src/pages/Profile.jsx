// Visualizar o perfil de uma mulher maravilhosa específica

import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Profile = () => {
    const [maravilhosa, setMaravilhosa] = useState({});

    const url = `http://localhost:5555/maravilhosas/${window.location.pathname.split('/')[2]}`

    useEffect(()=>{
       fetch(url)
           .then(res => res.json())
           .then((res) => setMaravilhosa(res))
    },[url])

    document.body.style.top = `-${window.scrollY}px`;

    async function excluirPerfil() {
        const requestOptions = {
            method: 'DELETE'
        };
        const res = await fetch(url, requestOptions);
        return res;
    }

    const handleDelete = (e) => {
        excluirPerfil().then(res => alert(res))
    }

    return (
    <>
        <header className="header-personalidade">
            <h1  className="header-personalidade__titulo">{maravilhosa.name}</h1>
        </header>
        <main>
            <section className="secao-diva container">
                <article>
                    <h3 className="secao-diva__titulo">{maravilhosa.subtitle}</h3>
                    <div className="secao-diva__introducao">
                        <div className="secao-diva__foto-perfil">
                            <img className="img-responsive" src={maravilhosa.photo} alt={`Foto da ${maravilhosa.name}`}/>
                        </div>
                    </div>
                </article>
                <article className="secao-diva__citacao">
                    <p>{`"${maravilhosa.phrase}"`}</p>
                </article>

                <article className="secao-diva__historia">
                    <h3 className="secao-diva__titulo secao-diva__titulo_esq">Conheça uma pouca da história</h3>
                    { maravilhosa.history && maravilhosa.history.map((paragrafo, index) => (<p>{paragrafo}</p>))}
                </article>
                <p className="secao-autora"> {`Autora: ${maravilhosa.addedBy}`}</p>
            </section>

            <aside >
                <div className="container">
                    <div className="secao-autora__dados">
                    </div>
                </div>
            </aside>

            <div className="secao-cta">
                <Link className="btn btn_roxo btn_center" to="/">Ver todas elas</Link>
                <Link className="btn btn_roxo btn_center" to={`/edit-profile/${window.location.pathname.split('/')[2]}`}>Editar </Link>
                <button className="btn btn_roxo btn_center" onClick={handleDelete}>Excluir </button>
            </div>

        </main>
    </>
    )
}
export default Profile;