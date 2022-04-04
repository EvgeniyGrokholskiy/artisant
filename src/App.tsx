import React, {useEffect, useState} from 'react';
import axios from 'axios';
import style from './app.module.scss';
import Card from "./component/card/card";
import Header from "./component/header/header";

function App() {

    const [products, setProducts] = useState([])

    const handleGet = () => {
        axios.get("https://artisant.io/api/products")
            .then((response) => {

                console.log(response.data.data)
            })
    }
    useEffect(() => {
        handleGet()
    }, [handleGet])

    return (
        <div className={style.wrapper}>
            <button onClick={handleGet}>get</button>
            <header>
                <Header/>
            </header>
            <main>
                <Card/>
            </main>
        </div>
    );
}

export default App;
