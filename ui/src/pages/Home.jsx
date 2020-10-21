//Lista de todas as mulheres maravilhosas

import React from 'react';
import Banner from '../components/Banner';
import List from '../components/List';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <Banner/>
            <List/>
            <Link className="btn btn_roxo btn_center mb-20" to="/create-profile">Adicionar maravilhosa</Link>
        </>
    )
}
export default Home;